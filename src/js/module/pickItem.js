import { setWinner } from "./setWinner.js";
import { pickingSection } from "../app.js";
import { result } from "./reset.js";

const pickedItem = document.querySelector(".picked--items");
const userPick = document.querySelector(".user-pick img");
const aiPick = document.querySelector(".AI-pick img");
const items = document.querySelectorAll(".picking--items .item");

let aiPicked, userPicked;

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
    aiPicked = items[random].dataset.pick;
    aiPick.src = `./images/icon-${aiPicked}.svg`;
    aiPick.parentElement.classList.add(`${aiPicked}`, "aiItem");
    result.textContent = setWinner(userPicked, aiPicked);
  }, 1000);
}

export { pickItem, aiPicked, userPicked, pickedItem, userPick, aiPick };
