document.addEventListener('DOMContentLoaded', function() {
    let quiz = [
        {
            question: "Перше прізвисько автора квізу?",
            options: ["Пупік", "Гунган", "Сплюн"],
            answer: 1
        },
    
        {
            question: "Перше прізвисько автора квізу?",
            options: ["Пупік", "Гунган", "Сплюн"],
            answer: 1
        }, 
        {
            question: "Перше прізвисько автора квізу?",
            options: ["Пупік", "Гунган", "Сплюн"],
            answer: 1
        },
        {
            question: "Перше прізвисько автора квізу?",
            options: ["Пупік", "Гунган", "Сплюн"],
            answer: 1
        },
    
    ]
    
    let currentQuestion = 0;
    let score = 0;
    
    
    let quizContainer = document.getElementById('question');
    let optionsContainer = document.getElementById('options');
    let submitButton = document.getElementById('submit');
    let resultsContainer = document.getElementById('results');
    
    function displayQuestion() {
        let question = quiz[currentQuestion].question;
        let options = quiz[currentQuestion].options;
    
        quizContainer.textContent = question;
        optionsContainer.innerHTML = '';
    
        for( let i = 0; i < options.length; i++) {
            let option = document.createElement('button');
            option.textContent = options[i];
            option.value = 1;
            option.className = 'option';
            option.addEventListener('click',handleAnswer);
            optionsContainer.appendChild(option)
        }
    }
    
    function handleAnswer(e) {
        let selectedOption = parseInt(e.target.value);
    
        if (selectedOption === quiz[currentQuestion].answer) {
            score ++;
        }
    
        currentQuestion++;
    
        if(currentQuestion < quiz.length) {
            displayQuestion();
        } else {
            displayResults();
        }
    }
    
    function displayResults() {
        quizContainer.style.display = 'none';
        optionsContainer.style.display = 'none';
        submitButton.style.display = 'none';
        resultsContainer.innerText = "УРа";
    }
    
    displayQuestion();
})
