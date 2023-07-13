document.addEventListener('DOMContentLoaded', function() {
    let quiz = [
        {
            question: "Яким є перше прізвисько, яке Даша дала Лєрі?",
            options: ["Пупік", "Гунган", "Сплюн", "Люблюсік"],
            answer: 1
        },
        {
            question: "Улюблений фільм дитинства Лєри?",
            options: ["Гаррі Поттер", "Титанік", "Пригоди Тома Сойєра", "Чарлі і шоколадна фабрика"],
            answer: 2
        }, 
        {
            question: "Що Лєра хоче відкрити у майбутньому?",
            options: ["кав'ярню", "видавництво", "бордель", "храм поклоніння дар'ї еліс", "видавництво і храм поклоніння дар'ї еліс"],
            answer: 4
        }, 
        {
            question: "Рай на землі - це",
            options: ["Теремки 2", "Дорогожичі", "Теремки 1"],
            answer: 0
        },
        {
            question: "Країна походження улюбленго зерна Лєри",
            options: ["Ефіопія", "Колумбія", "Кенія", "Коста Ріка", "Мексика"],
            answer: 2
        },
        {
            question: "Лєра вважає, що її дівчина:",
            options: ["неймовірна", "божественна", "еталон краси", "ідеал у всіх всесвітах", "усі відповіді є абсолютною правдою"],
            answer: 4
        },
        {
            question: "Улюблений колір Лєри -",
            options: ["чорний", "фіолетовий", "бордовий", "сірий", "жовтий", "зелений"],
            answer: 1
        },
        {
            question: "Що одне Лєра змогла б пити все життя?",
            options: ["матча на кокосовому", "капуч на вівсяному", "фільтр", "еспресо тонік"],
            answer: 1
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
        resultsContainer.innerText = "Вітаю! Твій результат " + score + " з" + " " + quiz.length + ".";
    }
    
    displayQuestion();
})
