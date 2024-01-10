const boxElements = document.querySelectorAll(".box");
let click = 0;
let arr = Array(9).fill(0);

boxElements.forEach((box) => {
  box.addEventListener("click", handleClick);
});

function handleClick(event) {
  const currentElement = event.target;
  const id = currentElement.id;
  const player = click % 2 === 0 ? "X" : "O";

  if (arr[id - 1] === 0) {
    arr[id - 1] = player;
    const text = document.createElement("p");
    text.textContent = player;
    text.style.fontSize = "80px";
    text.style.color = "goldenrod";
    currentElement.append(text);

    click++;
    checkResult();
  }
}

function checkResult() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (arr[a] !== 0 && arr[a] === arr[b] && arr[a] === arr[c]) {
      displayResult(`${arr[a]} Won the game`);
      return;
    }
  }

  if (click === 9) {
    displayResult("Tie");
  }
}

function displayResult(result) {
  const message = document.getElementById("message");
  const resultEle = document.getElementById("result");

  message.innerText = result;
  resultEle.style.visibility = "visible";
}

const playAgainBtn = document.getElementById("button");

playAgainBtn.addEventListener("click", function () {
  window.location = "index.html";
});
