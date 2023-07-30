import { userPick, aiPick } from "./pickItem.js";

const countScore = document.querySelector(".score");
let score = parseInt(countScore.innerHTML);

export function setWinner(user, ai) {
  if (user === ai) {
    return "IT'S A DRAW";
  } else if (
    (user === "rock" && ai === "lizard") ||
    (user === "rock" && ai === "scissors") ||
    (user === "paper" && ai === "rock") ||
    (user === "paper" && ai === "spock") ||
    (user === "scissors" && ai === "paper") ||
    (user === "scissors" && ai === "lizard") ||
    (user === "lizard" && ai === "spock") ||
    (user === "lizard" && ai === "paper") ||
    (user === "spock" && ai === "scissors") ||
    (user === "spock" && ai === "rock")
  ) {
    score++;
    userPick.parentElement.classList.add("winner");
    countScore.textContent = score;
    return "YOU WIN";
  } else {
    if (score < 1) countScore.textContent = 0;
    else {
      score--;
      countScore.textContent = score;
    }
    aiPick.parentElement.classList.add("winner");
    return "YOU LOSE";
  }
}
