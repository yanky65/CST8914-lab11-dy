const buttons = document.querySelectorAll(".accordion");

buttons.forEach((button, index) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "false";
    button.setAttribute("aria-expanded", String(expanded));
    panel.inert = !expanded;
  });

  button.addEventListener("keydown", (event) => {
    let nextIndex;

    switch (event.key) {
      case "ArrowDown":
        nextIndex = (index + 1) % buttons.length;
        break;
      case "ArrowUp":
        nextIndex = (index - 1 + buttons.length) % buttons.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = buttons.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    buttons[nextIndex].focus();
  });
});
