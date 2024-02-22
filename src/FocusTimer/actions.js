import * as elements from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sound.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countDonw();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  state.minutes = 60;
  state.seconds = 0;
  timer.updateDisplay();
}

export function add() {
  minutes.textContent = state.minutes++;
  timer.updateDisplay();
  if (minutes.textContent > 60) {
    state.minutes = 60;
    timer.updateDisplay();
  }
}

export function sub() {
  minutes.textContent = state.minutes--;
  timer.updateDisplay();
  if (minutes.textContent < 0) {
    state.minutes = 0;

    timer.updateDisplay();
  }
}

export function ToggleClick() {
  elements.florest.addEventListener("click", (event) => {
    elements.florest.classList.toggle("click");
    sounds.florestSound.play();
    elements.rain.classList.remove("click");
    elements.coffe.classList.remove("click");
    elements.fire.classList.remove("click");
    sounds.rainSound.pause();
    sounds.coffeSound.pause();
    sounds.fireSound.pause();

    if (elements.florest.className.includes("click")) {
      sounds.florestSound.play();
    } else {
      sounds.florestSound.pause();
    }
  });
  elements.rain.addEventListener("click", (event) => {
    elements.rain.classList.toggle("click");
    sounds.rainSound.play();
    elements.florest.classList.remove("click");
    elements.coffe.classList.remove("click");
    elements.fire.classList.remove("click");
    sounds.florestSound.pause();
    sounds.coffeSound.pause();
    sounds.fireSound.pause();

    if (elements.rain.className.includes("click")) {
      sounds.rainSound.play();
    } else {
      sounds.rainSound.pause();
    }
  });
  elements.coffe.addEventListener("click", (event) => {
    elements.coffe.classList.toggle("click");
    sounds.coffeSound.play();
    elements.florest.classList.remove("click");
    elements.rain.classList.remove("click");
    elements.fire.classList.remove("click");
    sounds.rainSound.pause();
    sounds.florestSound.pause();
    sounds.fireSound.pause();

    if (elements.coffe.className.includes("click")) {
      sounds.coffeSound.play();
    } else {
      sounds.coffeSound.pause();
    }
  });

  elements.fire.addEventListener("click", (event) => {
    elements.fire.classList.toggle("click");
    sounds.fireSound.play();
    elements.florest.classList.remove("click");
    elements.rain.classList.remove("click");
    elements.coffe.classList.remove("click");
    sounds.florestSound.pause();
    sounds.rainSound.pause();
    sounds.coffeSound.pause();

    if (elements.fire.className.includes("click")) {
      sounds.fireSound.play();
    } else {
      sounds.fireSound.pause();
    }
  });
}
