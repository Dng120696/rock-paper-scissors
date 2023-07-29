import { pickItem } from "./module/pickItem.js";
import { resetGame } from "./module/reset.js";
import { closeRule, toggleRule } from "./module/entry.js";

const btnPlay = document.querySelector(".btn-play-again");
const closeBtn = document.querySelector(".btn-close");
const btnRule = document.querySelector(".btn-rules");
export const pickingSection = document.querySelector(".picking--section");

pickingSection.addEventListener("click", pickItem.bind(this));
btnPlay.addEventListener("click", resetGame);
closeBtn.addEventListener("click", closeRule);
btnRule.addEventListener("click", toggleRule);
