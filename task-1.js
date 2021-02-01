const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
console.log(startBtn);

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let switchOn;

let changeBodyColor = () => {
  switchOn = setInterval(() => {
    body.style.backgroundColor = colors[randomIndex(0, colors.length - 1)];
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  // return;
};

startBtn.addEventListener('click', changeBodyColor);

let stopChangingColor = () => {
  clearInterval(switchOn);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

stopBtn.addEventListener('click', stopChangingColor);
