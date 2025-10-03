# Golden Fellows English E-Learning Platform 🎓
A dynamic, single-page application (SPA) style e-learning platform built with HTML, Tailwind CSS, and Firebase. It provides a comprehensive suite for instructors to create and manage curriculum and for students to engage with interactive lessons and assessments.

---
## ✨ Core Features
This project is architected with a clear separation between instructor and student roles, providing a tailored experience for each user type.

### Platform-Wide Features
* **User Authentication:** Secure login and session management powered by Firebase Auth.
* **Role-Based Dashboards:** The main dashboard dynamically displays different tools and information based on whether the user is an **instructor** or a **student**.
* **Consistent UI/UX:** A clean, modern interface built with Tailwind CSS is used across all pages for a cohesive user experience.

---
### 👨‍🏫 Instructor Features

A full suite of tools for curriculum creation, management, and student assessment.

* **Instructor Dashboard (`instructor-dashboard.html`)**
    * Central hub providing direct access to all creation and management tools.
    * Displays a list of all classes created by the instructor.

* **Lesson Creation & Management**
    * **Lesson Builder (`lesson-builder.html`):** Create custom lessons using various interactive content blocks, including text, grammar boxes, vocabulary, video embeds, multiple-choice questions, and fill-in-the-blanks.
    * **Lesson Library (`lesson-library.html`):** View, edit, delete, and assign lessons to classes using a user-friendly modal with a class dropdown.

* **Quiz & Assessment Creation**
    * **Quiz Maker (`quiz-maker.html`):** Build custom quizzes with multiple question types (Multiple Choice, Fill-in-the-Blank, Categorization, Ordering, Short Answer) and drag-and-drop reordering.
    * **Quiz Library (`quiz-library.html`):** View, edit, delete, and assign quizzes to specific classes via a modal interface.

* **Grading & Performance Tracking**
    * **Instructor Gradebook (`gradebook.html`):** A comprehensive view of all student submissions for all quizzes taught by the instructor, displayed in a clear table format.
    * **Class-Specific Gradebook Widget:** On each `class-page`, instructors see a widget displaying all quiz submissions for that specific class.

---
### 👩‍🎓 Student Features

An immersive and interactive learning environment designed for engagement and progress tracking.

* **Student Dashboard (`instructor-dashboard.html`)**
    * Personalized landing page providing direct access to the student's current class.
    * Features a **"Latest Quiz Result"** widget for immediate performance feedback.
    * Provides a link to the student's full gradebook.

* **Class Page (`class-page.html`)**
    * The primary learning environment where all class-related content is centralized.
    * **Lesson Content:** View lessons assigned by the instructor.
    * **Interactive Exercises:** Complete in-lesson multiple-choice and fill-in-the-blank questions with instant feedback.
    * **Vocabulary Flashcards:** Study weekly vocabulary with an interactive, flippable card widget.
    * **Assigned Quizzes:** View and access all quizzes assigned to the class.
    * **Personal Gradebook Widget:** See a summary of personal quiz scores for the current class.
    * **Discussion Board:** Participate in class discussions.

* **Quiz & Grade Management**
    * **Quiz Player (`quiz-player.html`):** A dedicated, timed interface for taking quizzes. It features a start screen, question-by-question progression, and an instant results screen upon completion.
    * **Student Gradebook (`student-gradebook.html`):** A personal page displaying a history of all quiz submissions, showing the quiz title, score, percentage, and date taken.

---
## 🛠️ Tech Stack
* **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6 Modules)
* **Backend & Database:** Google Firebase
    * **Firestore:** NoSQL database for storing all user, class, lesson, and quiz data.
    * **Firebase Authentication:** For user session management.
    * **Security Rules:** Role-based rules to protect data integrity.

---
## 📁 Project Files
* `instructor-dashboard.html`: Main landing page with role-based views.
* `lesson-builder.html`: Instructor tool for creating lessons.
* `lesson-library.html`: Instructor tool for managing and assigning lessons.
* `quiz-maker.html`: Instructor tool for creating quizzes.
* `quiz-library.html`: Instructor tool for managing and assigning quizzes.
* `gradebook.html`: Instructor-facing gradebook for all submissions.
* `class-page.html`: The main classroom view for both students and instructors.
* `quiz-player.html`: The student-facing interface for taking a quiz.
* `student-gradebook.html`: The student-facing page for viewing all personal grades.
