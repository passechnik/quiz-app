document.addEventListener('DOMContentLoaded', function() {
    let quiz = [
        {
            question: "Яким є перше прізвисько, яке Даша дала Лєрі?",
            options: ["Пупік", "Гунган", "Сплюн"],
            answer: 1
        },
        {
            question: "Що Лєра хоче відкрити у майбутньому? (можливі дві правильні відповіді",
            options: ["кав'ярню", "видавництво", "бордель", "храм поклоніння дар'ї еліс", "видавництво і храм поклоніння дар'ї еліс"],
            answer: 4
        }, 
        {
            question: "Лєра вважає, що її дівчина:",
            options: ["неймовірна", "божественна", "еталон краси", "ідеал у всіх всесвітах", "усі відповіді є абсолютною правдою"],
            answer: 4
        },
        {
            question: "З якого моменту Лєра в дитинстві ридала як навіжена кожного разу?",
            options: ["Зі спогадів Северуса Снейпа", "Коли дитинча мамонта не могло знайти маму", "Коли у П'ятачка луснула повітряна кулька"],
            answer: 2
        },
        {
            question: "Авторство прізвиська Солодка Кардманова Булочка належить:",
            options: ["Лєрі", "Даші"],
            answer: 0
        },
    
    ]
    
    let currentQuestion = 0;
    let userAnswers = [];
    
    
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
            option.value = i;
            option.className = 'option';
            option.addEventListener('click',handleAnswer);
            optionsContainer.appendChild(option)
        }
    }
    
    function handleAnswer(e) {
        let selectedOption = parseInt(e.target.value);
        userAnswers[currentQuestion] = selectedOption;

        currentQuestion++;

        if(currentQuestion < quiz.length) {
            displayQuestion();
        }else {
            displayResults();
        }

    }
    
    function displayResults() {
        let score = 0;

        for (let i = 0; i < quiz.length; i++) {
            if (userAnswers[i] === quiz[i].answer) {
                score++;
            }
        }
        quizContainer.style.display = 'none';
        optionsContainer.style.display = 'none';
        submitButton.style.display = 'none';
        resultsContainer.innerText = "Твій результат " + score + " from" + " " + quiz.length;
    }
    
    displayQuestion();
})
