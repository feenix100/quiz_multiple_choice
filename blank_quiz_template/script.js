//add multiple choice questions here
const quizData = [
    // copy and paste below this line to add as many questions as you want.
    {
        question: "Enter your question Here", //enter question here
        options: ["Enter", "Multiple", "Answers", "Here"], //add the multiple choice answers here
        correct: "Correct answer here" //add the correct answer here
    },
    // copy and paste above this line to add as many questions as you want.
   
    // Add more questions/answers as needed
];

let currentQuestionIndex = 0;
let score = {
    correct: 0,
    incorrect: 0
};

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionCard = document.getElementById('question-card');
    let optionsHtml = '';
    questionData.options.forEach((option, index) => {
        optionsHtml += `
            <div>
                <input type="radio" id="option${index}" name="option" value="${option}">
                <label for="option${index}">${option}</label>
            </div>
        `;
    });
    questionCard.innerHTML = `
        <h2>${questionData.question}</h2>
        <form id="quiz-form">${optionsHtml}</form>
    `;
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('result').innerHTML = '';
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const resultDiv = document.getElementById('result');

    if (selectedOption) {
        const selectedValue = selectedOption.value;
        const correctValue = quizData[currentQuestionIndex].correct;

        if (selectedValue === correctValue) {
            resultDiv.innerHTML = `<p style="color: green;">Correct!</p>`;
            score.correct++;
        } else {
            resultDiv.innerHTML = `<p style="color: red;">Incorrect. The correct answer is ${correctValue}.</p>`;
            score.incorrect++;
        }

        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Please select an answer.</p>`;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}
//displays amount of correct or incorrect answers at end of quiz
function finishQuiz() {
    const questionCard = document.getElementById('question-card');
    questionCard.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Correct Answers: ${score.correct}</p>
        <p>Incorrect Answers: ${score.incorrect}</p>
    `;
    document.getElementById('result').innerHTML = '';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'block';
}
//button for restarting quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score.correct = 0;
    score.incorrect = 0;
    loadQuestion();
}

// Load the first question when the page loads
window.onload = loadQuestion;
