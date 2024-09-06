document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');

    let currentQuestionIndex = 0;
    let questions = JSON.parse(localStorage.getItem('mcqs')) || [];

    function startQuiz() {
        currentQuestionIndex = 0;
        nextButton.classList.add('hide');
        showQuestion(questions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        answerButtons.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('btn');
            if (index === question.correctOption - 1) {
                button.dataset.correct = true;
            }
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';
        setStatusClass(selectedButton, correct);
        Array.from(answerButtons.children).forEach(button => {
            setStatusClass(button, button.dataset.correct === 'true');
        });
        nextButton.classList.remove('hide');
    }

    function setStatusClass(element, correct) {
        if (correct) {
            element.style.backgroundColor = 'green';
        } else {
            element.style.backgroundColor = 'red';
        }
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
            nextButton.classList.add('hide');
        } else {
            alert('Quiz Finished!');
            startQuiz();
        }
    });

    startQuiz();
});
