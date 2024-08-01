document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    const questions = [
        {
            question: "What is Pythagoras Theorem?",
            answers: ["a^2+b^2=c^2", "a^2/b^2=c^2", "4x4=16"],
            correctAnswer: "a^2+b^2=c^2",
            solution: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides."
        },
        {
            question: "What is the 12th digit of Pi?",
            answers: ["9", "8", "16"],
            correctAnswer: "9",
            solution: "The 12th digit of Pi after the decimal point is 9."
        },
        {
            question: "What is apple + Orange?",
            answers: ["Juice", "Fruit Salad", "Poison"],
            correctAnswer: "Fruit Salad",
            solution: "Combining apple and orange results in a fruit salad."
        },
        {
            question: "Who is top of the NCEA L3 Computer Science Class?",
            answers: ["Olly", "Eden", "Riley"],
            correctAnswer: "Olly",
            solution: "Can't be Riley, he's a dropkick. No one thought it was Eden. be fr."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');

        answersElement.innerHTML = '';

        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answerBtn');
            button.addEventListener('click', () => checkAnswer(answer));
            answersElement.appendChild(button);
        });
    }

    function checkAnswer(selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = currentQuestion.correctAnswer;
        if (selectedAnswer === correctAnswer) {
            score++;
            document.getElementById('score').textContent = `Score: ${score}`;
        } else {
            alert(`Incorrect Answer. Solution: ${currentQuestion.solution}`);
            score--;
            document.getElementById('score').textContent = `Score: ${score}`;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        document.getElementById('question').textContent = "Quiz Over!";
        document.getElementById('answers').innerHTML = '';
        document.getElementById('retakeBtn').style.display = 'block';
        console.log("Quiz ended, retake button displayed");
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('retakeBtn').style.display = 'none';
        loadQuestion();
    }

    document.getElementById('retakeBtn').addEventListener('click', resetQuiz);

    loadQuestion();
});
