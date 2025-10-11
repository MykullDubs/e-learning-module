<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adventure English - Unified Game</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&family=Libre+Baskerville&display=swap');
        body { font-family: 'Libre Baskerville', serif; overflow-y: hidden; }
        h1, h2, h3, .font-title { font-family: 'IM Fell English SC', serif; }
        .gm-card.active { border-color: #f59e0b; /* amber-500 */ }
        #d20-result.roll-animation { animation: roll 0.5s ease-out; }
        @keyframes roll {
            0% { transform: scale(1.5) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
            100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
    </style>
</head>
<body class="bg-stone-800 text-stone-200 h-screen flex flex-col">

    <header class="text-center py-4 bg-stone-900 shadow-lg">
        <h1 class="text-4xl font-title text-amber-400">Adventure English 🏰</h1>
    </header>

    <main class="flex-grow flex flex-row overflow-hidden">
        <aside class="w-1/3 bg-stone-700 p-4 flex flex-col border-r-4 border-stone-900">
            <h2 class="text-3xl font-title text-center mb-4">GM Dashboard</h2>
            
            <div class="bg-stone-800 p-3 rounded-lg mb-4 shadow-md">
                <h3 class="font-title text-xl text-amber-300 mb-2">Add New Player</h3>
                <div class="flex gap-2">
                    <input type="text" id="new-player-name" placeholder="Character Name" class="w-full p-2 rounded bg-stone-600 border border-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <button id="add-player-btn" class="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-2 px-4 rounded transition">Add</button>
                </div>
            </div>
            
            <div id="gm-player-list" class="flex-grow overflow-y-auto space-y-3 pr-2">
                </div>
        </aside>

        <section id="active-player-sheet" class="w-2/3 p-6 overflow-y-auto">
            </section>
    </main>

<script>
// ======================================================================
// === APPLICATION LOGIC (ALL-IN-ONE) ===
// ======================================================================

document.addEventListener('DOMContentLoaded', () => {

    // --- STATE MANAGEMENT ---
    let gameState = {
        characters: {}, // Using an object for easier lookup by ID
        activeCharacterId: null
    };

    const loadState = () => {
        const savedState = localStorage.getItem('adventureEnglishState');
        if (savedState) {
            gameState = JSON.parse(savedState);
        }
    };

    const saveState = () => {
        localStorage.setItem('adventureEnglishState', JSON.stringify(gameState));
    };

    // --- DOM ELEMENTS ---
    const gmPlayerList = document.getElementById('gm-player-list');
    const activePlayerSheet = document.getElementById('active-player-sheet');
    const addPlayerBtn = document.getElementById('add-player-btn');
    const newPlayerNameInput = document.getElementById('new-player-name');

    // --- CORE RENDERING FUNCTIONS ---
    
    // Renders the list of player cards in the GM panel
    const renderGmDashboard = () => {
        gmPlayerList.innerHTML = '';
        if (Object.keys(gameState.characters).length === 0) {
            gmPlayerList.innerHTML = `<p class="text-center text-stone-400">No players yet. Add one above!</p>`;
            return;
        }

        for (const id in gameState.characters) {
            const char = gameState.characters[id];
            const card = document.createElement('div');
            card.className = `gm-card bg-stone-800 p-3 rounded-lg shadow-lg cursor-pointer border-2 border-transparent hover:border-amber-400 transition`;
            if (id === gameState.activeCharacterId) {
                card.classList.add('active');
            }
            card.dataset.id = id;
            card.innerHTML = `
                <h3 class="font-title text-xl text-amber-300">${char.name}</h3>
                <p class="font-bold text-lg">${char.hp} / ${char.maxHp} HP</p>
                <p class="text-sm text-sky-300">Status: ${char.status}</p>
            `;
            gmPlayerList.appendChild(card);
        }
    };

    // Renders the full sheet for the selected player
    const renderActivePlayerSheet = () => {
        if (!gameState.activeCharacterId || !gameState.characters[gameState.activeCharacterId]) {
            activePlayerSheet.innerHTML = `<div class="text-center text-stone-400 mt-10"><h2 class="text-3xl font-title">Welcome, Game Master!</h2><p>Select a player from the dashboard to view their sheet.</p></div>`;
            return;
        }

        const char = gameState.characters[gameState.activeCharacterId];
        activePlayerSheet.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">
                    <h2 class="text-5xl font-title text-center">${char.name}</h2>
                    <div class="grid grid-cols-2 gap-4 text-center">
                        <div class="bg-stone-700 p-4 rounded-lg">
                            <h3 class="font-title text-stone-400">HEALTH</h3>
                            <div class="flex items-center justify-center gap-4 mt-2">
                                <button data-action="damage" class="bg-red-600 hover:bg-red-700 text-white font-bold w-10 h-10 rounded-full text-2xl">-</button>
                                <p class="text-4xl font-bold text-red-400">${char.hp} / ${char.maxHp}</p>
                                <button data-action="heal" class="bg-green-600 hover:bg-green-700 text-white font-bold w-10 h-10 rounded-full text-2xl">+</button>
                            </div>
                        </div>
                        <div class="bg-stone-700 p-4 rounded-lg">
                            <h3 class="font-title text-stone-400">STATUS</h3>
                            <input type="text" data-action="setStatus" value="${char.status}" class="w-full p-2 rounded bg-stone-600 border border-stone-500 text-center text-2xl mt-2 font-bold text-sky-300">
                        </div>
                    </div>
                    <textarea data-action="setDescription" class="w-full h-24 p-2 border border-stone-600 rounded bg-stone-700 text-stone-200" placeholder="Describe character...">${char.description}</textarea>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        ${Object.entries(char.attributes).map(([attr, score]) => `
                            <div class="bg-stone-700 p-3 rounded-lg">
                                <div class="font-title text-xl">${attr}</div>
                                <div class="text-2xl font-bold">${score >= 0 ? '+' : ''}${score}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="bg-stone-700 p-4 rounded-lg text-center">
                        <h3 class="text-2xl font-title mb-4">Actions & Dice</h3>
                        <div class="grid grid-cols-2 gap-2 mb-4">
                             ${Object.keys(char.attributes).map(attr => `<button data-action="roll" data-attribute="${attr}" class="bg-stone-600 hover:bg-amber-600 hover:text-stone-900 font-bold p-3 rounded transition">Roll ${attr}</button>`).join('')}
                        </div>
                        <div id="d20-result" class="text-6xl font-bold my-4 text-amber-400">20</div>
                        <p id="roll-detail" class="text-sm text-stone-400 h-5">Roll the die!</p>
                    </div>
                    <div class="bg-stone-700 p-4 rounded-lg">
                        <h3 class="text-2xl font-title mb-2">Inventory</h3>
                        <div class="flex gap-2">
                            <input type="text" id="new-item-input" placeholder="Add item..." class="w-full p-2 rounded bg-stone-600 border border-stone-500">
                            <button data-action="addItem" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded">+</button>
                        </div>
                        <ul id="inventory-list" class="mt-4 space-y-2">
                             ${char.inventory.map((item, index) => `<li class="flex justify-between items-center bg-stone-600 p-2 rounded"><span>${item}</span><button data-action="removeItem" data-index="${index}" class="text-red-400 hover:text-red-600 font-bold">X</button></li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    };

    const refreshUI = () => {
        renderGmDashboard();
        renderActivePlayerSheet();
    };

    // --- EVENT HANDLERS ---
    
    // Add a new player
    addPlayerBtn.addEventListener('click', () => {
        const name = newPlayerNameInput.value.trim();
        if (!name) return;

        const id = `char_${Date.now()}`;
        gameState.characters[id] = {
            name: name,
            description: "",
            inventory: ["Torch", "Rope (10m)"],
            attributes: { Strong: 1, Smart: 1, Smooth: 1, Quick: 1 },
            hp: 10,
            maxHp: 10,
            status: "Healthy"
        };
        newPlayerNameInput.value = '';
        saveState();
        refreshUI();
    });

    // Select an active player from the GM list
    gmPlayerList.addEventListener('click', (e) => {
        const card = e.target.closest('.gm-card');
        if (card) {
            gameState.activeCharacterId = card.dataset.id;
            saveState(); // Save the active character choice
            refreshUI();
        }
    });
    
    // Handle all actions on the active player sheet
    activePlayerSheet.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (!action || !gameState.activeCharacterId) return;

        const char = gameState.characters[gameState.activeCharacterId];
        
        switch (action) {
            case 'damage': char.hp = Math.max(0, char.hp - 1); break;
            case 'heal': char.hp = Math.min(char.maxHp, char.hp + 1); break;
            case 'roll':
                const attribute = e.target.dataset.attribute;
                const roll = Math.floor(Math.random() * 20) + 1;
                const bonus = char.attributes[attribute];
                const total = roll + bonus;
                document.getElementById('d20-result').textContent = total;
                document.getElementById('roll-detail').textContent = `(${roll} on d20) + (${bonus} ${attribute})`;
                document.getElementById('d20-result').classList.add('roll-animation');
                setTimeout(() => document.getElementById('d20-result').classList.remove('roll-animation'), 500);
                return; // Don't save state or refresh for a roll
            case 'addItem':
                const newItemInput = document.getElementById('new-item-input');
                const newItem = newItemInput.value.trim();
                if (newItem) {
                    char.inventory.push(newItem);
                    newItemInput.value = '';
                }
                break;
            case 'removeItem':
                const itemIndex = parseInt(e.target.dataset.index);
                char.inventory.splice(itemIndex, 1);
                break;
        }

        saveState();
        refreshUI();
    });
    
    // Handle text input changes for status and description
    activePlayerSheet.addEventListener('change', (e) => {
        const action = e.target.dataset.action;
        if (!action || !gameState.activeCharacterId) return;

        const char = gameState.characters[gameState.activeCharacterId];

        switch (action) {
            case 'setStatus': char.status = e.target.value; break;
            case 'setDescription': char.description = e.target.value; break;
        }
        
        saveState();
        // A small optimization: only refresh the GM dash if status changes
        if (action === 'setStatus') {
            renderGmDashboard();
        }
    });

    // --- INITIALIZATION ---
    loadState();
    refreshUI();
});
</script>

</body>
</html>
