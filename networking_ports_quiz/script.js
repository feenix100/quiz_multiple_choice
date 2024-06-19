const quizData = [
    {
        question: "What is the port number for Hypertext Transfer Protocol (HTTP)?",
        options: ["20", "21", "80", "443"],
        correct: "80"
    },
    {
        question: "What is the port number for Hypertext Transfer Protocol Secure (HTTPS)?",
        options: ["17", "22", "80", "443"],
        correct: "443"
    },
    {
        question: "What is the port number for FTP?",
        options: ["20/21", "27/28", "53", "69"],
        correct: "20/21"
    },
    {
        question: "What is the port number for SSH?",
        options: ["339", "22", "110", "443"],
        correct: "22"
    },
    
    {
        question: "What is the port number for Telnet",
        options: ["23", "22", "339", "443"],
        correct: "23"
    },
    
    {
        question: "What is the port number for Simple Mail Transfer Protocol (SMTP)",
        options: ["69", "110", "25", "33"],
        correct: "25"
    },
    
    {
        question: "What is the port number for The Domain Name System (DNS)",
        options: ["25", "110", "33", "53"],
        correct: "53"
    },
    
    {
        question: "What is the port number for Network Basic Input/Output System (NetBIOS)",
        options: ["25", "109/110", "68/69", "137/139"],
        correct: "137/139"
    },
    
    {
        question: "What is the port number for Internet Message Access Protocol (IMAP)",
        options: ["25", "109", "143", "3339"],
        correct: "143"
    },
    
    {
        question: "What is the port number for Simple Network Management Protocol (SNMP)",
        options: ["89", "110", "143", "161/162"],
        correct: "161/162"
    },
    
    {
        question: "What is the port number for Server Message Block (SMB)",
        options: ["22", "445", "143", "185"],
        correct: "445"
    },
    
    {
        question: "What is the port number for Remote Desktop Protocol (RDP)",
        options: ["53", "69", "3389", "185"],
        correct: "3389"
    }
    // Add more questions as needed
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

function restartQuiz() {
    currentQuestionIndex = 0;
    score.correct = 0;
    score.incorrect = 0;
    loadQuestion();
}

// Load the first question when the page loads
window.onload = loadQuestion;
