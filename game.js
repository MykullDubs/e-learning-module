const initialDecks = {
    "Speaking Prompts": {
        "General Prompts": [
            { topic: "My Favorite Food", prompt: "Describe your favorite food. Where did you first try it? How is it made?", difficulty: "Easy", points: 1 },
            { topic: "A Travel Adventure", prompt: "Talk about a place you've traveled to. What was the most memorable thing you did there?", difficulty: "Easy", points: 1 },
            { topic: "Future Job", prompt: "What job do you want to have in the future? Why do you think you'd be good at it?", difficulty: "Easy", points: 1 },
            { topic: "A Funny Story", prompt: "Share a funny story that happened to you or someone you know.", difficulty: "Medium", points: 2 },
            { topic: "My Daily Routine", prompt: "Walk me through a typical day in your life, from waking up to going to bed.", difficulty: "Medium", points: 2 },
            { topic: "A Favorite Movie", prompt: "Talk about a movie you love. What's the plot, and why do you recommend it?", difficulty: "Medium", points: 2 },
            { topic: "The Wild Card", prompt: "Choose any topic from our list and speak about it.", difficulty: "Hard", points: 3 },
            { topic: "Technology", prompt: "How has technology changed our lives? Give some examples.", difficulty: "Hard", points: 3 },
            { topic: "A Difficult Decision", prompt: "Describe a difficult decision you had to make. What were the options, and what was the outcome?", difficulty: "Hard", points: 3 }
        ]
    },
    "Phrasal Verbs": {
        "Animal Phrasal Verbs": [
            { topic: "Wolf Down", prompt: "Describe a time you ate something very quickly.", difficulty: "Easy", points: 1, definition: "<h4>Wolf Down</h4><p>To <b>'Wolf Down'</b> means to eat something very quickly. Example: 'He had to <b>wolf down</b> his breakfast.'" },
            { topic: "Pig Out", prompt: "Tell me about a time you ate too much food.", difficulty: "Easy", points: 1, definition: "<h4>Pig Out</h4><p>To <b>'Pig Out'</b> means to eat a very large amount of food. Example: 'We <b>pigged out</b> on pizza.'" },
            { topic: "Monkey Around", prompt: "Share a memory of a time you were being silly or playful.", difficulty: "Easy", points: 1, definition: "<h4>Monkey Around</h4><p>To <b>'Monkey Around'</b> means to behave in a silly or playful way. Example: 'The kids were <b>monkeying around</b>.'" },
            { topic: "Chicken Out", prompt: "Talk about a time you decided not to do something out of fear.", difficulty: "Medium", points: 2, definition: "<h4>Chicken Out</h4><p>To <b>'Chicken Out'</b> means to decide not to do something because you are too scared. Example: 'I was going to try it, but I <b>chickened out</b>.'" },
            { topic: "Horse Around", prompt: "Describe a time you and your friends were playing a bit rough.", difficulty: "Medium", points: 2, definition: "<h4>Horse Around</h4><p>To <b>'Horse Around'</b> means to play in a rough and noisy way. Example: 'The boys were <b>horsing around</b> and broke a lamp.'" },
            { topic: "Fish For", prompt: "Tell me about a time you tried to get compliments from someone.", difficulty: "Medium", points: 2, definition: "<h4>Fish For</h4><p>To <b>'Fish For'</b> something means to try to get it indirectly. Example: 'He was <b>fishing for</b> a compliment.'" },
            { topic: "Goat", prompt: "Explain a situation where you annoyed or provoked someone.", difficulty: "Hard", points: 3, definition: "<h4>Goat</h4><p>To <b>'Goat'</b> someone means to annoy or provoke them into reacting. Example: 'The older brother always tries to <b>goat</b> his sister.'" },
            { topic: "Badger", prompt: "Describe a time you repeatedly asked someone for something.", difficulty: "Hard", points: 3, definition: "<h4>Badger</h4><p>To <b>'Badger'</b> someone means to continuously ask them to do something. Example: 'My kids <b>badgered</b> me for weeks.'" },
            { topic: "Clam Up", prompt: "Talk about a time you suddenly stopped talking because you were scared or shy.", difficulty: "Hard", points: 3, definition: "<h4>Clam Up</h4><p>To <b>'Clam Up'</b> means to suddenly stop talking. Example: 'She <b>clammed up</b> when the teacher asked.'" }
        ]
    },
    "Idioms & Expressions": {
        "Confrontation Phrasal Verbs": [
            { topic: "Face up to", prompt: "Describe a time you had to accept a difficult reality.", difficulty: "Medium", points: 2, definition: "<h4>Face up to</h4><p>To <b>'Face up to'</b> something means to accept and deal with a difficult fact or reality. 😬</p><p>Example: 'She has to <b>face up to</b> the fact that she's not going to win.'</p>" },
            { topic: "Stand up to", prompt: "Talk about a time you defended yourself against someone more powerful.", difficulty: "Medium", points: 2, definition: "<h4>Stand up to</h4><p>To <b>'Stand up to'</b> someone means to defend yourself against a person or organization that is more powerful than you. 💪</p><p>Example: 'He was the only employee brave enough to <b>stand up to</b> the unfair manager.'</p>" },
            { topic: "Back down", prompt: "Describe an argument where you or the other person refused to change your position.", difficulty: "Medium", points: 2, definition: "<h4>Back down</h4><p>To <b>'Back down'</b> means to withdraw your claim or position in an argument or confrontation.</p><p>Example: 'Neither politician was willing to <b>back down</b> during the debate.'</p>" },
            { topic: "Give in", prompt: "Talk about a time you stopped arguing and let someone else have their way.", difficulty: "Easy", points: 1, definition: "<h4>Give in</h4><p>To <b>'Give in'</b> means to surrender; to stop resisting or fighting.</p><p>Example: 'After arguing for an hour, I finally <b>gave in</b> and agreed to go to the movie he wanted to see.'</p>" },
            { topic: "Tell off", prompt: "Share a memory of a time you were reprimanded for doing something wrong.", difficulty: "Medium", points: 2, definition: "<h4>Tell off</h4><p>To <b>'Tell off'</b> someone means to scold or reprimand them for something they did wrong. It is a separable phrasal verb.</p><p>Example: 'The teacher <b>told the student off</b> for cheating on the test.' or 'The teacher really <b>told him off</b>.'</p>" },
            { topic: "Lash out at", prompt: "Describe a situation where someone reacted very angrily under pressure.", difficulty: "Hard", points: 3, definition: "<h4>Lash out at</h4><p>To <b>'Lash out at'</b> someone means to suddenly and angrily attack them, usually verbally. 😡</p><p>Example: 'He is under a lot of pressure, so he tends to <b>lash out at</b> his team when things go wrong.'</p>" },
            { topic: "Fall out with", prompt: "Talk about a time you had a serious argument that damaged a friendship.", difficulty: "Medium", points: 2, definition: "<h4>Fall out with</h4><p>To <b>'Fall out with'</b> someone means to have a serious argument that damages your friendship.</p><p>Example: 'I <b>fell out with</b> my best friend last month and we haven't spoken since.'</p>" },
            { topic: "Go at it", prompt: "Describe a very energetic or intense argument you have witnessed.", difficulty: "Hard", points: 3, definition: "<h4>Go at it</h4><p>To <b>'Go at it'</b> means to argue or fight with energy and enthusiasm. It is very informal.</p><p>Example: 'The two lawyers were really <b>going at it</b> during the trial.'</p>" },
            { topic: "Storm out", prompt: "Talk about a time you saw someone leave a room very suddenly because they were angry.", difficulty: "Medium", points: 2, definition: "<h4>Storm out</h4><p>To <b>'Storm out'</b> of a place means to leave suddenly and very angrily.</p><p>Example: 'After he was accused of lying, he <b>stormed out</b> of the meeting.'</p>" }
        ],
        "Body Part Idioms": [
            { topic: "Keep An Eye On", prompt: "Describe a time you had to watch something or someone carefully.", difficulty: "Easy", points: 1, definition: "<h4>Keep An Eye On</h4><p>To <b>'Keep An Eye On'</b> someone or something means to watch it carefully to make sure it is safe or correct.</p><p>Example: 'Can you please <b>keep an eye on</b> my bag for a minute?'</p>" },
            { topic: "Give a Hand", prompt: "Talk about a time you helped someone with a difficult task.", difficulty: "Easy", points: 1, definition: "<h4>Give a Hand</h4><p>To <b>'Give someone a Hand'</b> means to help them. It is a common, friendly offer.</p><p>Example: 'That box looks heavy, let me <b>give you a hand</b> with it.'</p>" },
            { topic: "Twist Someone's Arm", prompt: "Describe a time you convinced a friend to do something they didn't want to do.", difficulty: "Easy", points: 1, definition: "<h4>Twist Someone's Arm</h4><p>To <b>'Twist Someone's Arm'</b> means to persuade or convince someone to do something they were hesitant to do.</p><p>Example: 'I didn't want to go to the party, but my friends <b>twisted my arm</b>.'" },
            { topic: "Get Something Off Your Chest", prompt: "Talk about a time you confessed something that was worrying you.", difficulty: "Medium", points: 2, definition: "<h4>Get Something Off Your Chest</h4><p>This phrase means to tell someone about something that has been worrying or bothering you for a long time, in order to feel relieved.</p><p>Example: 'I have to <b>get this off my chest</b>—I broke your vase last week.'</p>" },
            { topic: "Play It by Ear", prompt: "Describe a situation where you had no plan and had to improvise.", difficulty: "Medium", points: 2, definition: "<h4>Play It by Ear</h4><p>To <b>'Play It by Ear'</b> means to decide how to deal with a situation as it develops, rather than planning in advance.</p><p>Example: 'We don't have a reservation for dinner, we'll just have to <b>play it by ear</b> when we get there.'</p>" },
            { topic: "Pull Someone's Leg", prompt: "Share a memory of a time you playfully joked with or teased a friend.", difficulty: "Medium", points: 2, definition: "<h4>Pull Someone's Leg</h4><p>This idiom means to tease or joke with someone, often by telling them something that isn't true.</p><p>Example: 'Don't worry, I'm not really moving to Antarctica. I was just <b>pulling your leg</b>!'</p>" },
            { topic: "Cost an Arm and a Leg", prompt: "Talk about something you bought that was very expensive.", difficulty: "Hard", points: 3, definition: "<h4>Cost an Arm and a Leg</h4><p>If something <b>'Costs an Arm and a Leg'</b>, it is extremely expensive.</p><p>Example: 'Getting my car repaired is going to <b>cost me an arm and a leg</b>.'</p>" },
            { topic: "Get Cold Feet", prompt: "Describe a time you became too scared to do something you had planned.", difficulty: "Hard", points: 3, definition: "<h4>Get Cold Feet</h4><p>To <b>'Get Cold Feet'</b> means to suddenly become too nervous or frightened to do something you had planned, like giving a speech or getting married.</p><p>Example: 'He was going to ask for a promotion, but he <b>got cold feet</b>.'</p>" },
            { topic: "Bite Your Tongue", prompt: "Describe a situation where you wanted to say something, but you knew it was better to stay silent.", difficulty: "Hard", points: 3, definition: "<h4>Bite Your Tongue</h4><p>To <b>'Bite Your Tongue'</b> means to make a great effort to stop yourself from saying something that you really want to say, usually because it would be impolite or unwise.</p><p>Example: 'I had to <b>bite my tongue</b> when my boss criticized my work unfairly.'</p>" }
        ],
        "Sense-Related Idioms": [
            { topic: "Feel Off", prompt: "Describe a day when you weren't sick, but just felt strange or not yourself.", difficulty: "Easy", points: 1, definition: "<h4>Feel Off</h4><p>To <b>'Feel Off'</b> means to feel slightly unwell or not in your usual good spirits. It's a general way to say you're not feeling 100%.</p><p>Example: 'I'm not sure what's wrong, I just <b>feel a bit off</b> today.'</p>" },
            { topic: "Look Over", prompt: "Talk about a time you had to quickly review a document, like an email or report.", difficulty: "Easy", points: 1, definition: "<h4>Look Over</h4><p>To <b>'Look Over'</b> something means to examine it quickly. It's often used when you're checking for mistakes or getting a general idea of something.</p><p>Example: 'Can you please <b>look over</b> my email before I send it?'</p>" },
            { topic: "Lend an Ear", prompt: "Describe a time a friend was having a problem and you listened to them.", difficulty: "Easy", points: 1, definition: "<h4>Lend an Ear</h4><p>To <b>'Lend an Ear'</b> means to listen patiently and sympathetically to someone. It is an offer to be a good listener for someone who needs to talk.</p><p>Example: 'If you ever need to talk, I'm always here to <b>lend an ear</b>.'</p>" },
            { topic: "Play It by Ear", prompt: "Describe a situation where you had no plan and had to improvise or decide as you went.", difficulty: "Medium", points: 2, definition: "<h4>Play It by Ear</h4><p>To <b>'Play It by Ear'</b> means to decide how to deal with a situation as it develops, rather than planning in advance.</p><p>Example: 'We don't have a reservation for dinner, we'll just have to <b>play it by ear</b> when we get there.'</p>" },
            { topic: "See Eye to Eye", prompt: "Talk about a topic where you and a friend or family member have very different opinions.", difficulty: "Medium", points: 2, definition: "<h4>See Eye to Eye</h4><p>To <b>'See Eye to Eye'</b> with someone means to agree with them completely. It is often used in the negative to show disagreement.</p><p>Example: 'My brother and I don't always <b>see eye to eye</b> on politics, but we are still good friends.'</p>" },
            { topic: "Leaves a Bad Taste", prompt: "Share an experience that seemed good at first but ended up making you feel bad or uncomfortable.", difficulty: "Medium", points: 2, definition: "<h4>Leaves a Bad Taste in Your Mouth</h4><p>If an experience <b>'Leaves a Bad Taste in Your Mouth'</b>, it creates an unpleasant memory or feeling that lasts for a long time.</p><p>Example: 'The way the company handled the layoffs really <b>left a bad taste in my mouth</b>.'</p>" },
            { topic: "Turn a Blind Eye", prompt: "Describe a situation where you saw someone doing something wrong but chose to ignore it.", difficulty: "Hard", points: 3, definition: "<h4>Turn a Blind Eye</h4><p>To <b>'Turn a Blind Eye'</b> to something means to deliberately ignore something that you know is wrong or improper.</p><p>Example: 'The manager knew about the problem for months but decided to <b>turn a blind eye</b>.'" },
            { topic: "Get a Gut Feeling", prompt: "Talk about a time you made a decision based on intuition or a strong feeling, not logic.", difficulty: "Hard", points: 3, definition: "<h4>Get a Gut Feeling</h4><p>A <b>'Gut Feeling'</b> is a strong belief or intuition about someone or something that is not based on facts or evidence. It's a decision from your 'gut' or stomach.</p><p>Example: 'I can't explain why, but I <b>have a gut feeling</b> that this business deal is a bad idea.'</p>" },
            { topic: "Smell a Rat", prompt: "Share a memory of a time you felt that something was wrong or that someone was being dishonest.", difficulty: "Hard", points: 3, definition: "<h4>Smell a Rat</h4><p>To <b>'Smell a Rat'</b> means to begin to suspect that something is wrong in a situation, especially that someone is trying to deceive you.</p><p>Example: 'He said he fixed the car, but the engine still sounded strange. I started to <b>smell a rat</b>.'" }
        ],
        "Health & Wellness Idioms": [
            { topic: "Under the Weather", prompt: "Describe a time you felt sick but it wasn't a serious illness.", difficulty: "Easy", points: 1, definition: "<h4>Under the Weather</h4><p>To be <b>'Under the Weather'</b> means to feel slightly ill or unwell.</p><p>Example: 'I'm not going to work today; I'm feeling a bit <b>under the weather</b>.'</p>" },
            { topic: "A New Lease on Life", prompt: "Talk about a change you made that gave you a fresh, positive start.", difficulty: "Easy", points: 1, definition: "<h4>A New Lease on Life</h4><p>If you have <b>'A New Lease on Life'</b>, you have a renewed sense of energy and purpose after a difficult period.</p><p>Example: 'After recovering from his illness, he had <b>a new lease on life</b>.'</p>" },
            { topic: "Back on Your Feet", prompt: "Share a memory of recovering from an illness or a difficult situation.", difficulty: "Easy", points: 1, definition: "<h4>Back on Your Feet</h4><p>To be <b>'Back on Your Feet'</b> means to have recovered from an illness or a period of bad luck.</p><p>Example: 'I'm so glad to see you're <b>back on your feet</b> after the flu.'</p>" },
            { topic: "A Bitter Pill to Swallow", prompt: "Describe a difficult fact or situation that you had to accept.", difficulty: "Medium", points: 2, definition: "<h4>A Bitter Pill to Swallow</h4><p>This phrase refers to an unpleasant fact or situation that is difficult but necessary to accept.</p><p>Example: 'Losing the championship game was <b>a bitter pill to swallow</b> for the team.'</p>" },
            { topic: "A Clean Bill of Health", prompt: "Talk about a time you went for a check-up, like at the doctor or dentist.", difficulty: "Medium", points: 2, definition: "<h4>A Clean Bill of Health</h4><p>To receive <b>'A Clean Bill of Health'</b> means a doctor has examined you and confirmed that you are perfectly healthy.</p><p>Example: 'I was worried about my check-up, but the doctor gave me <b>a clean bill of health</b>.'</p>" },
            { topic: "Recharge Your Batteries", prompt: "Describe your favorite way to relax and regain your energy after a busy week.", difficulty: "Medium", points: 2, definition: "<h4>Recharge Your Batteries</h4><p>To <b>'Recharge Your Batteries'</b> means to rest and relax for a period of time so that you feel energetic again.</p><p>Example: 'I'm going to spend the weekend at the beach to <b>recharge my batteries</b>.'" },
            { topic: "On the Mend", prompt: "Describe the process of recovering from an injury or illness.", difficulty: "Hard", points: 3, definition: "<h4>On the Mend</h4><p>If someone is <b>'On the Mend'</b>, they are in the process of recovering from an illness or injury.</p><p>Example: 'She was very sick last week, but I'm happy to say she is finally <b>on the mend</b>.'" },
            { topic: "A Taste of Your Own Medicine", prompt: "Talk about a situation where someone was treated in the same unpleasant way they had treated others.", difficulty: "Hard", points: 3, definition: "<h4>A Taste of Your Own Medicine</h4><p>This phrase means to receive the same negative treatment that you have given to others.</p><p>Example: 'He's always teasing his friends, so they gave him <b>a taste of his own medicine</b> at the party.'</p>" },
            { topic: "Run its Course", prompt: "Describe a time you had to let a difficult situation, like a common cold, end naturally.", difficulty: "Hard", points: 3, definition: "<h4>Run its Course</h4><p>If something, especially an illness, is left to <b>'Run its Course'</b>, it is allowed to develop and finish naturally without interference.</p><p>Example: 'The doctor said there's no cure for the common cold; you just have to let it <b>run its course</b>.'" }
        ],
        "Small Business Idioms": [
            { topic: "Get Off the Ground", prompt: "Describe the first few steps you would take to start a new, small business.", difficulty: "Easy", points: 1, definition: "<h4>Get Off the Ground</h4><p>To <b>'Get a project or business Off the Ground'</b> means to get it started successfully.</p><p>Example: 'We need more funding to help our new company <b>get off the ground</b>.'</p>" },
            { topic: "Cut Corners", prompt: "Talk about a time when doing a job too quickly or cheaply resulted in bad quality.", difficulty: "Easy", points: 1, definition: "<h4>Cut Corners</h4><p>To <b>'Cut Corners'</b> means to save time, money, or effort by doing something poorly or not following the rules.</p><p>Example: 'The builder <b>cut corners</b> by using cheap materials, and now the roof leaks.'</p>" },
            { topic: "Touch Base", prompt: "Describe a situation where you needed to briefly talk to a coworker to update them.", difficulty: "Easy", points: 1, definition: "<h4>Touch Base</h4><p>To <b>'Touch Base'</b> means to make contact with someone briefly to get an update or stay connected.</p><p>Example: 'Let's <b>touch base</b> next week to see how the project is going.'</p>" },
            { topic: "Go the Extra Mile", prompt: "Share a story about a time you made a special effort at work to help a client or colleague.", difficulty: "Medium", points: 2, definition: "<h4>Go the Extra Mile</h4><p>To <b>'Go the Extra Mile'</b> means to do more than what is expected of you to achieve a goal.</p><p>Example: 'She always <b>goes the extra mile</b> for her customers, and they love her for it.'</p>" },
            { topic: "Learning Curve", prompt: "Talk about a new skill you learned. Was it easy or difficult to learn at the beginning?", difficulty: "Medium", points: 2, definition: "<h4>Learning Curve</h4><p>The <b>'Learning Curve'</b> describes how quickly someone learns a new skill. A steep learning curve means it is difficult and takes time to learn.</p><p>Example: 'The new software has a steep <b>learning curve</b>, but it's powerful once you understand it.'</p>" },
            { topic: "Red Tape", prompt: "Describe a time you had to deal with a lot of complicated rules or paperwork to get something done.", difficulty: "Medium", points: 2, definition: "<h4>Red Tape</h4><p><b>'Red Tape'</b> refers to excessive, complicated rules and bureaucracy that prevent things from being done quickly.</p><p>Example: 'We could finish this project in a week if it weren't for all the government <b>red tape</b>.'</p>" },
            { topic: "In the Red / In the Black", prompt: "Imagine you own a small coffee shop. Describe a month where you lost money, and a month where you made a profit.", difficulty: "Hard", points: 3, definition: "<h4>In the Red / In the Black</h4><p>To be <b>'In the Red'</b> means a business is losing money. To be <b>'In the Black'</b> means it is profitable.</p><p>Example: 'After a difficult first year, the company is finally <b>in the black</b>.'" },
            { topic: "Corner the Market", prompt: "If you could dominate one type of business in your city, what would it be and why?", difficulty: "Hard", points: 3, definition: "<h4>Corner the Market</h4><p>To <b>'Corner the Market'</b> means to get so much control of a product or service that you can fix its price and have no competition.</p><p>Example: 'By buying the only two suppliers, the large corporation tried to <b>corner the market</b> on that material.'</p>" },
            { topic: "Think Outside the Box", prompt: "Describe a creative solution you thought of for a common problem.", difficulty: "Hard", points: 3, definition: "<h4>Think Outside the Box</h4><p>To <b>'Think Outside the Box'</b> means to think creatively and unconventionally, not limited by old or standard ways of thinking.</p><p>Example: 'To solve this problem, we need to stop using the same old ideas and really <b>think outside the box</b>.'" }
        ],
        "Relationship Idioms": [
            { topic: "Get Along With", prompt: "Describe a person you get along with very well. What makes your relationship easy?", difficulty: "Easy", points: 1, definition: "<h4>Get Along With</h4><p>To <b>'Get Along With'</b> someone means to have a friendly, harmonious relationship with them.</p><p>Example: 'My sister and I are very different, but we <b>get along with</b> each other perfectly.'</p>" },
            { topic: "Hit It Off", prompt: "Talk about the first time you met a good friend. Did you become friends instantly?", difficulty: "Easy", points: 1, definition: "<h4>Hit It Off</h4><p>If two people <b>'Hit It Off'</b>, they like each other and become friendly immediately.</p><p>Example: 'I was nervous to meet her parents, but we <b>hit it off</b> right away.'</p>" },
            { topic: "On the Same Page", prompt: "Describe a time you worked on a project and everyone in the group had the same understanding.", difficulty: "Easy", points: 1, definition: "<h4>On the Same Page</h4><p>To be <b>'On the Same Page'</b> means to be in agreement or to have a shared understanding about something.</p><p>Example: 'Before we start the project, let's have a meeting to make sure everyone is <b>on the same page</b>.'</p>" },
            { topic: "Drift Apart", prompt: "Talk about a friend you are not close with anymore. Why do you think you lost contact?", difficulty: "Medium", points: 2, definition: "<h4>Drift Apart</h4><p>When people <b>'Drift Apart'</b>, they gradually become less friendly and their relationship ends over time.</p><p>Example: 'We were best friends in college, but we started to <b>drift apart</b> after we graduated.'</p>" },
            { topic: "See Eye to Eye", prompt: "Talk about a topic where you and a friend or family member have very different opinions.", difficulty: "Medium", points: 2, definition: "<h4>See Eye to Eye</h4><p>To <b>'See Eye to Eye'</b> with someone means to agree with them completely. It is often used in the negative to show disagreement.</p><p>Example: 'My brother and I don't always <b>see eye to eye</b> on politics, but we are still good friends.'</p>" },
            { topic: "Clear the Air", prompt: "Describe a time you had a conversation with someone to resolve a misunderstanding.", difficulty: "Medium", points: 2, definition: "<h4>Clear the Air</h4><p>To <b>'Clear the Air'</b> means to address a disagreement or misunderstanding openly to improve a relationship.</p><p>Example: 'After our argument, we had a long talk to <b>clear the air</b>.'" },
            { topic: "Bury the Hatchet", prompt: "Talk about a time you forgave someone or ended a long-running argument.", difficulty: "Hard", points: 3, definition: "<h4>Bury the Hatchet</h4><p>To <b>'Bury the Hatchet'</b> means to end a conflict with someone and become friends again.</p><p>Example: 'After years of not speaking, the two brothers finally decided to <b>bury the hatchet</b>.'" },
            { topic: "Build Bridges", prompt: "Describe a situation where you helped two people or groups with different opinions to understand each other.", difficulty: "Hard", points: 3, definition: "<h4>Build Bridges</h4><p>To <b>'Build Bridges'</b> means to improve relationships between people or groups who are very different or do not like each other.</p><p>Example: 'The new manager's main goal is to <b>build bridges</b> between the marketing and sales departments.'</p>" },
            { topic: "Burn Your Bridges", prompt: "Talk about a time you left a job or a situation in a way that made it impossible to go back.", difficulty: "Hard", points: 3, definition: "<h4>Burn Your Bridges</h4><p>To <b>'Burn Your Bridges'</b> means to act in a way that destroys any chance of returning to a previous situation or relationship.</p><p>Example: 'He was very rude when he quit his job, so he really <b>burned his bridges</b> with that company.'" }
        ]
    }
};

const grid = document.getElementById('game-grid');
const promptModal = document.getElementById('prompt-modal');
const promptTopic = document.getElementById('prompt-topic');
const promptText = document.getElementById('prompt-text');
const endTurnBtn = document.getElementById('end-turn-btn');
const failTurnBtn = document.getElementById('fail-turn-btn');
const turnDisplay = document.getElementById('turn-display');
const player1ScoreEl = document.getElementById('player1-score');
const player2ScoreEl = document.getElementById('player2-score');
const timerBar = document.getElementById('timer-bar');
const player1NameDisplay = document.getElementById('player1-name-display');
const player2NameDisplay = document.getElementById('player2-name-display');
const gameInfo = document.getElementById('game-info');
const startModal = document.getElementById('start-modal');
const categorySelectionContainer = document.getElementById('category-selection-container');
const deckSelectionContainer = document.getElementById('deck-selection-container');
const manageDecksBtn = document.getElementById('manage-decks-btn');
const deckManagementModal = document.getElementById('deck-management-modal');
const deckListContainer = document.getElementById('deck-list-container');
const createDeckBtn = document.getElementById('create-deck-btn');
const closeManageDecksBtn = document.getElementById('close-manage-decks-btn');
const player1NameInput = document.getElementById('player1-name-input');
const player2NameInput = document.getElementById('player2-name-input');
const editDeckModal = document.getElementById('edit-deck-modal');
const editDeckTitle = document.getElementById('edit-deck-title');
const addCardBtn = document.getElementById('add-card-btn');
const saveDeckBtn = document.getElementById('save-deck-btn');
const closeEditDeckBtn = document.getElementById('close-edit-deck-btn');
const newCardTopicInput = document.getElementById('new-card-topic');
const newCardPromptInput = document.getElementById('new-card-prompt');
const newCardDifficultyInput = document.getElementById('new-card-difficulty');
const newCardPointsInput = document.getElementById('new-card-points');
const newCardDefinitionInput = document.getElementById('new-card-definition');
const currentDeckCardsContainer = document.getElementById('current-deck-cards');
const endGameModal = document.getElementById('end-game-modal');
const endGameMessageEl = document.getElementById('end-game-message');
const endGameP1ScoreEl = document.getElementById('end-game-p1-score');
const endGameP2ScoreEl = document.getElementById('end-game-p2-score');
const playAgainBtn = document.getElementById('play-again-btn');

let decks = {};
let currentDeckData = [];
let editingDeckName = '', editingCategoryName = '';
let currentPlayer = 'X', player1Score = 0, player2Score = 0;
let timer, selectedCardIndex = -1, currentDeck = [];
let player1Name = 'Player 1', player2Name = 'Player 2';
let usedCards = new Set();
const tooltip = document.querySelector('.tooltip');

function saveDecks() { localStorage.setItem('speakTacticsDecks', JSON.stringify(decks)); }
function loadDecks() {
    const storedDecks = localStorage.getItem('speakTacticsDecks');
    decks = storedDecks ? JSON.parse(storedDecks) : initialDecks;
    if (!storedDecks) saveDecks();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame(categoryName, deckName) {
    startModal.classList.add('hidden');
    grid.classList.remove('hidden');
    gameInfo.classList.remove('hidden');
    player1Name = player1NameInput.value || 'Player 1';
    player2Name = player2NameInput.value || 'Player 2';
    player1NameDisplay.textContent = player1Name;
    player2NameDisplay.textContent = player2Name;
    const selectedDeck = decks[categoryName][deckName];
    if (selectedDeck) {
        currentDeck = [...selectedDeck];
        shuffleArray(currentDeck);
        initGame();
    }
}

function initGame() {
    currentPlayer = 'X';
    player1Score = 0;
    player2Score = 0;
    usedCards.clear();
    renderBoard();
    updateTurnDisplay();
    updateScores();
    endGameModal.classList.add('hidden');
}

function renderBoard() {
    grid.innerHTML = '';
    currentDeck.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'game-card flex items-center justify-center h-24 bg-white dark:bg-slate-800 rounded-lg shadow cursor-pointer border border-stone-200 dark:border-slate-700';
        cardElement.dataset.index = index;
        cardElement.dataset.topic = card.topic;
        cardElement.dataset.prompt = card.prompt;
        cardElement.dataset.points = card.points;
        cardElement.dataset.difficulty = card.difficulty;
        if (card.definition) cardElement.dataset.definition = card.definition;
        let difficultyColorClass = { "Easy": "difficulty-easy", "Medium": "difficulty-medium", "Hard": "difficulty-hard" }[card.difficulty] || "";
        cardElement.innerHTML = `<p class="text-xl font-bold text-center pointer-events-none">${card.topic}<br><span class="text-sm font-normal ${difficultyColorClass}">(${card.difficulty})</span></p>`;
        cardElement.addEventListener('click', () => handleCardClick(index));
        grid.appendChild(cardElement);
    });
}

function handleCardClick(index) {
    if (usedCards.has(index)) return;
    selectedCardIndex = index;
    const cardData = currentDeck[index];
    promptTopic.textContent = cardData.topic;
    promptText.textContent = cardData.prompt;
    promptModal.classList.remove('hidden');
    let timeAllowance;
    switch (cardData.difficulty) {
        case "Easy": timeAllowance = 25; break;
        case "Medium": timeAllowance = 35; break;
        case "Hard": timeAllowance = 45; break;
        default: timeAllowance = 25;
    }
    startTimer(timeAllowance);
}

function startTimer(totalTime) {
    let timeLeft = totalTime;
    timerBar.className = 'h-full bg-green-500'; // Start green
    timerBar.style.width = '100%';
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        const percentage = (timeLeft / totalTime) * 100;
        timerBar.style.width = `${percentage}%`;
        if (percentage <= 33.3) {
            timerBar.className = 'h-full bg-red-500';
        } else if (percentage <= 66.6) {
            timerBar.className = 'h-full bg-amber-500';
        }
        if (timeLeft <= 0) {
            clearInterval(timer);
            promptModal.classList.add('hidden');
            handleTurnComplete(false);
        }
    }, 1000);
}

function stopTimer() { clearInterval(timer); }

function handleTurnComplete(success) {
    stopTimer();
    promptModal.classList.add('hidden');
    if (success) {
        usedCards.add(selectedCardIndex);
        const cardElement = grid.children[selectedCardIndex];
        cardElement.classList.remove('cursor-pointer');
        const playerColorClass = currentPlayer === 'X' ? 'bg-indigo-500' : 'bg-teal-500';
        cardElement.className = `game-card flex items-center justify-center h-24 rounded-lg shadow ${playerColorClass}`;
        const playerMark = currentPlayer === 'X' ? player1Name.charAt(0) : player2Name.charAt(0);
        cardElement.innerHTML = `<p class="text-4xl font-extrabold text-white">${playerMark}</p>`;
        const pointsEarned = currentDeck[selectedCardIndex].points;
        if (currentPlayer === 'X') player1Score += pointsEarned;
        else player2Score += pointsEarned;
        updateScores();
    }
    if (usedCards.size === currentDeck.length) {
        showEndGameScreen();
        return;
    }
    nextTurn();
}

function nextTurn() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateTurnDisplay();
}

function updateTurnDisplay() {
    const playerTurnName = currentPlayer === 'X' ? player1Name : player2Name;
    if (turnDisplay) {
        turnDisplay.textContent = `${playerTurnName}'s Turn`;
        turnDisplay.className = `text-2xl font-bold mb-2 ${currentPlayer === 'X' ? 'player1-turn' : 'player2-turn'}`;
    }
}

function updateScores() {
    player1ScoreEl.textContent = player1Score;
    player2ScoreEl.textContent = player2Score;
}

function showEndGameScreen() {
    let message = (player1Score > player2Score) ? `${player1Name} wins!` : (player2Score > player1Score) ? `${player2Name} wins!` : "It's a draw!";
    endGameMessageEl.textContent = message;
    endGameP1ScoreEl.textContent = `${player1Name}: ${player1Score}`;
    endGameP2ScoreEl.textContent = `${player2Name}: ${player2Score}`;
    endGameModal.classList.remove('hidden');
}

function renderCategoryButtons() {
    categorySelectionContainer.innerHTML = '';
    deckSelectionContainer.innerHTML = '';
    deckSelectionContainer.classList.add('hidden');
    categorySelectionContainer.classList.remove('hidden');
    Object.keys(decks).forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'bg-stone-200 dark:bg-slate-700 font-semibold py-3 px-6 rounded-lg text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-slate-600 transition-colors';
        button.addEventListener('click', () => renderDeckButtons(category));
        categorySelectionContainer.appendChild(button);
    });
}

function renderDeckButtons(category) {
    deckSelectionContainer.innerHTML = '';
    categorySelectionContainer.classList.add('hidden');
    deckSelectionContainer.classList.remove('hidden');
    const backBtn = document.createElement('button');
    backBtn.textContent = '← Back to Categories';
    backBtn.className = 'bg-stone-500 hover:bg-stone-600 text-white font-semibold py-2 px-4 rounded-lg mb-2';
    backBtn.addEventListener('click', renderCategoryButtons);
    deckSelectionContainer.appendChild(backBtn);
    Object.keys(decks[category]).forEach(deckName => {
        const button = document.createElement('button');
        button.textContent = deckName;
        button.className = 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-sm';
        button.addEventListener('click', () => startGame(category, deckName));
        deckSelectionContainer.appendChild(button);
    });
}

function renderDeckList() {
    deckListContainer.innerHTML = '';
    for (const category in decks) {
        for (const deckName in decks[category]) {
            const deckItem = document.createElement('div');
            deckItem.classList.add('flex', 'justify-between', 'items-center', 'bg-stone-100', 'dark:bg-slate-700', 'p-3', 'rounded-lg', 'mb-2');
            deckItem.innerHTML = `
                <span class="text-lg font-semibold">${deckName} (${decks[category][deckName].length} cards)</span>
                <div class="space-x-2">
                    <button class="edit-deck-btn bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded" data-category="${category}" data-deck="${deckName}">Edit</button>
                    ${(category !== 'Speaking Prompts' && category !== 'Phrasal Verbs' && category !== 'Idioms & Expressions') ? `<button class="delete-deck-btn bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded" data-category="${category}" data-deck="${deckName}">Delete</button>` : ''}
                </div>
            `;
            deckListContainer.appendChild(deckItem);
        }
    }
}

function showDeckManagement() {
    startModal.classList.add('hidden');
    deckManagementModal.classList.remove('hidden');
    renderDeckList();
}

function showEditDeck(category, deckName) {
    deckManagementModal.classList.add('hidden');
    editDeckModal.classList.remove('hidden');
    editDeckTitle.textContent = `Editing: ${deckName}`;
    currentDeckData = [...decks[category][deckName]];
    editingCategoryName = category;
    editingDeckName = deckName;
    renderCurrentDeckCards();
}

function renderCurrentDeckCards() {
    currentDeckCardsContainer.innerHTML = '';
    currentDeckData.forEach((card, index) => {
        const cardItem = document.createElement('div');
        cardItem.classList.add('bg-stone-100', 'dark:bg-slate-700', 'p-4', 'rounded-lg', 'mb-2', 'flex', 'justify-between', 'items-center');
        cardItem.innerHTML = `
            <div>
                <p class="font-bold">${card.topic} <span class="text-sm">(${card.difficulty})</span></p>
                <p class="text-sm text-gray-500 dark:text-gray-400">${card.prompt}</p>
            </div>
            <button class="delete-card-btn bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded" data-index="${index}">Delete</button>
        `;
        cardItem.querySelector('.delete-card-btn').addEventListener('click', (e) => deleteCard(e.target.dataset.index));
        currentDeckCardsContainer.appendChild(cardItem);
    });
}

function addCard() {
    const topic = newCardTopicInput.value;
    const prompt = newCardPromptInput.value;
    const difficulty = newCardDifficultyInput.value;
    const points = parseInt(newCardPointsInput.value) || 1;
    const definition = newCardDefinitionInput.value;

    if (topic && prompt) {
        const newCard = { topic, prompt, difficulty, points };
        if (definition) {
            newCard.definition = definition;
        }
        currentDeckData.push(newCard);
        renderCurrentDeckCards();
        newCardTopicInput.value = '';
        newCardPromptInput.value = '';
        newCardDefinitionInput.value = '';
    }
}

function deleteCard(index) {
    currentDeckData.splice(index, 1);
    renderCurrentDeckCards();
}

function saveDeck() {
    decks[editingCategoryName][editingDeckName] = currentDeckData;
    saveDecks();
    editDeckModal.classList.add('hidden');
    showDeckManagement();
}

function deleteDeck(category, deckName) {
    if (confirm(`Are you sure you want to delete the deck: ${deckName}?`)) {
        delete decks[category][deckName];
        if (Object.keys(decks[category]).length === 0) {
            delete decks[category];
        }
        saveDecks();
        renderDeckList();
    }
}

function createNewDeck() {
    const newDeckName = prompt("Enter a name for your new deck:");
    if (!newDeckName) return;

    const newCategory = prompt("Enter a category for your new deck (e.g., 'Business English'):");
    if (!newCategory) return;

    if (decks[newCategory] && decks[newCategory][newDeckName]) {
        alert("A deck with this name already exists in this category.");
        return;
    }

    if (!decks[newCategory]) {
        decks[newCategory] = {};
    }
    decks[newCategory][newDeckName] = [];
    saveDecks();
    showEditDeck(newCategory, newDeckName);
}

function init() {
    loadDecks();
    startModal.classList.remove('hidden'); 
    renderCategoryButtons();
    endTurnBtn.addEventListener('click', () => handleTurnComplete(true));
    failTurnBtn.addEventListener('click', () => handleTurnComplete(false));
    playAgainBtn.addEventListener('click', () => {
        endGameModal.classList.add('hidden');
        startModal.classList.remove('hidden');
        grid.classList.add('hidden');
        gameInfo.classList.add('hidden');
        renderCategoryButtons();
    });
    manageDecksBtn.addEventListener('click', showDeckManagement);
    closeManageDecksBtn.addEventListener('click', () => {
        deckManagementModal.classList.add('hidden');
        startModal.classList.remove('hidden');
    });
    createDeckBtn.addEventListener('click', createNewDeck);
    deckListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-deck-btn')) {
            showEditDeck(e.target.dataset.category, e.target.dataset.deck);
        } else if (e.target.classList.contains('delete-deck-btn')) {
            deleteDeck(e.target.dataset.category, e.target.dataset.deck);
        }
    });
    addCardBtn.addEventListener('click', addCard);
    saveDeckBtn.addEventListener('click', saveDeck);
    closeEditDeckBtn.addEventListener('click', () => {
        editDeckModal.classList.add('hidden');
        showDeckManagement();
    });
}

init();