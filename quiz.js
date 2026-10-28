const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");
const correctAnswers = { q1: "b", q2: "a", q3: "b", q4: "b", q5: "b" };

const quizMessages = {
  title: ["Great work!", "Good start!", "Keep learning!"],
  tip: ["You know the key steps for safer e-waste handling.", "Review the solutions page and try again to strengthen your e-waste know-how.", "Start with repair, reuse, and authorised collection. Small steps help."],
  score: "You got {score} out of 5 correct."
};

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!quizForm.reportValidity()) return;

  let score = 0;
  Object.keys(correctAnswers).forEach(function (question) {
    const answer = quizForm.querySelector(`input[name="${question}"]:checked`);
    if (answer && answer.value === correctAnswers[question]) score += 1;
  });

  const messages = quizMessages;
  const level = score >= 4 ? 0 : score >= 2 ? 1 : 2;
  const scoreText = messages.score.replace("{score}", score);
  quizResult.querySelector("h2").textContent = messages.title[level];
  quizResult.querySelector("p:last-child").textContent = `${scoreText} ${messages.tip[level]}`;
  quizResult.classList.add("has-result");
});

quizForm.addEventListener("reset", function () {
  window.setTimeout(function () {
    quizResult.querySelector("h2").textContent = "Ready when you are.";
    quizResult.querySelector("p:last-child").textContent = "Complete the five questions to see your score and a quick tip.";
    quizResult.classList.remove("has-result");
  }, 0);
});
