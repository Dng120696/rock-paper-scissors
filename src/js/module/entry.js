const sectionRules = document.querySelector(".section--rules");
export function closeRule() {
  sectionRules.classList.add("hide-rule");
}
export function toggleRule() {
  sectionRules.classList.toggle("hide-rule");
}
