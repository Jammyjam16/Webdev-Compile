const questions = [
  { question: "1.)What is the nearest planet in the sun?", answer: "Mercury" },
  { question: "2.)What is the largest planet in the solar system?", answer: "Jupiter" },
  { question: "3.)What is the most largest bird in the world?", answer: "Ostrich" },
  { question: "4.)Who is your lover?", answer: "Lander" },
  { question: "5.)What is your favorite color?", answer: "Blue" }
];

let currentQuestion = 0;

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion].question;
}

function checkAnswer() {
  const userAnswer = document.getElementById("user-answer").value.toLowerCase();
  const correctAnswer = questions[currentQuestion].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
      document.getElementById("user-answer").value = "";
    } else {
      alert("Congratulations you complete the task..BRYTA'S UNGO UI");
    }
  } else {
    alert("Incorrect answer try agian....BUGUA KA!!!  ");
    currentQuestion = 0;
    showQuestion();
    document.getElementById("user-answer").value = "";
  }
}


showQuestion();