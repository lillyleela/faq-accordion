const buttons = document.getElementsByClassName("faq-question");
const answers = document.getElementsByClassName("faq-answer");
const plusIcons = document.getElementsByClassName("plus-icon");
const minusIcons = document.getElementsByClassName("minus-icon");
// button.setAttribute("aria-expanded", "true");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // Show/Hide answer
    answers[i].classList.toggle("d-none");

    // Show/Hide icons
    plusIcons[i].classList.toggle("d-none");
    minusIcons[i].classList.toggle("d-none");
    const isOpen = !answers[i].classList.contains("d-none");
    button.setAttribute("aria-expanded", isOpen);
  });
}
