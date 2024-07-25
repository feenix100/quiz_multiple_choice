# Customizable Multiple Choice Quiz in JavaScript

### Overview

This project features a customizable, easy-to-use multiple-choice quiz written in JavaScript. There's no need for installation.

### How to Use

1. **Customize Questions**: Modify the `script.js` file to add your own questions. Alternatively, you can use ChatGPT to generate questions for you.
2. **Launch the Quiz**: Open `index.html` in a browser to start the quiz.
3. **Enjoy the Quiz**: Answer the questions and have fun!
4. **Customize Appearance**: Edit `styles.css` to change the look and feel of the quiz.
5. **Send a Blank Check (Optional)**

### File Overview

- **script.js**: Contains the logic and questions for the quiz.
- **index.html**: The main HTML file to open in a browser.
- **styles.css**: Customize the appearance of the quiz.

### Example Script Customization

```javascript
// script.js
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    },
    // Add more questions here
];
```

### Example HTML Structure

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Choice Quiz</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="quiz-container">
        <h1>Multiple Choice Quiz</h1>
        <div id="question-container"></div>
        <button id="next-button">Next</button>
    </div>
    <script src="script.js"></script>
    <script src="quiz.js"></script>
</body>
</html>
```

### Example Style Customization

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
}

#quiz-container {
    width: 50%;
    margin: auto;
    padding: 20px;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
```

Enjoy creating and customizing your own multiple-choice quiz with ease!
