import { setWinner } from "./setWinner.js";
import { pickingSection } from "../app.js";
import { result } from "./reset.js";

const pickedItem = document.querySelector(".picked--items");
const userPick = document.querySelector(".user-pick img");
const AIpick = document.querySelector(".AI-pick img");
const items = document.querySelectorAll(".picking--items .item");

let aipicked, userPicked;

function pickItem(e) {
  const el = e.target.closest(".item");
  if (!el) return;

  pickingSection.classList.add("hidden");
  pickedItem.classList.remove("hidden");

  userPicked = el.dataset.pick;
  userPick.src = `./images/icon-${userPicked}.svg`;
  userPick.parentElement.classList.add(`${userPicked}`, "userItem");

  setTimeout(() => {
    const random = Math.trunc(Math.random() * items.length);
    aipicked = items[random].dataset.pick;
    AIpick.src = `./images/icon-${aipicked}.svg`;
    AIpick.parentElement.classList.add(`${aipicked}`, "aiItem");
    result.textContent = setWinner(userPicked, aipicked);
  }, 1000);
}

export { pickItem, aipicked, userPicked, pickedItem, userPick, AIpick };
