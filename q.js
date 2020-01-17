const questionPage = document.getElementById("question");
const questionForm = document.getElementById("question-form");
const questionInput = document.getElementById("question-input");
const questionSubmit = document.getElementById("question-submit");

const answerPage = document.getElementById("answer");
const answerMessage = document.getElementById("answer-message");
const answerReset = document.getElementById("reset");

var answerList = Array(
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
);

const handleQuestionKeyed = ev => {
  const val = ev.target.value;
  if (val.length > 3) {
    questionSubmit.classList.remove("invisible");
  } else {
    questionSubmit.classList.add("invisible");
  }
};

const handleQuestionSubmit = ev => {
  ev.preventDefault();
  // get answer
  const rand = Math.floor(Math.random() * answerList.length);
  const answer = answerList[rand];
  answerMessage.innerHTML = answer;
  // change view
  questionPage.classList.add("hide");
  answerPage.classList.remove("hide");
};

const handleReset = ev => {
  if (ev) ev.preventDefault();
  // clear
  questionInput.value = "";
  answerMessage.innerHTML = "";
  // change view
  questionPage.classList.remove("hide");
  answerPage.classList.add("hide");
  questionInput.focus();
};

const listeners = () => {
  questionInput.addEventListener("keyup", handleQuestionKeyed);
  questionForm.addEventListener("submit", handleQuestionSubmit);
  answerReset.addEventListener("click", handleReset);
};

const init = function() {
  handleReset();
  listeners();
  document.removeEventListener("DOMContentLoaded", init);
};
document.addEventListener("DOMContentLoaded", init);
