import * as item from "./pickItem.js";
import { pickingSection } from "../app.js";

export const result = document.querySelector(".results");

export function resetGame() {
  item.pickedItem.classList.add("hidden");
  pickingSection.classList.remove("hidden");
  item.aiPick.src = ``;
  item.aiPick.parentElement.classList.remove(
    `${item.aiPicked}`,
    "aiItem",
    "winner"
  );
  item.userPick.parentElement.classList.remove(`${item.userPicked}`, "winner");
  result.textContent = "";
}
