import * as item from "./pickItem.js";
import { pickingSection } from "../app.js";

export const result = document.querySelector(".results");

export function resetGame() {
  item.pickedItem.classList.add("hidden");
  pickingSection.classList.remove("hidden");
  item.AIpick.src = ``;
  item.AIpick.parentElement.classList.remove(`${item.aipicked}`, "aiItem");
  item.userPick.parentElement.classList.remove(`${item.userPicked}`);
  result.textContent = "";
}
