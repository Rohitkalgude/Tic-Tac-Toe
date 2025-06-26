let boxes = document.querySelectorAll(".box");
let resetgame = document.getElementById("reset-btn");
let message = document.querySelector(".message");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newgame");

let isPlayerO = true; //palyer x , palyer o

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box click");

    //player O
    if (isPlayerO) {
      box.innerText = "O";
      isPlayerO = false;
    }
    // palyer X
    else {
      box.innerText = "x";
      isPlayerO = true;
    }

    box.style.backgroundColor = "#E5E4E2";
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winpattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)

    let posvalue1 = boxes[pattern[0]].innerText;
    let posvalue2 = boxes[pattern[1]].innerText;
    let posvalue3 = boxes[pattern[2]].innerText;

    if (posvalue1 != "" && posvalue2 != "" && posvalue3 != "") {
      if (posvalue1 === posvalue2 && posvalue2 === posvalue3) {
        console.log("Winner");
        showWinner(posvalue1);
      }
    }
  }
};

const showWinner = (Winner) => {
  msg.innerText = `winner ${Winner}`;
  message.classList.remove("hide");
  disableAllBoxes();
};

//game rest
const resetGame = () => {
  isPlayerO = true;
  enableBoxes();
  message.classList.add("hide");
};

const disableAllBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "";
  }
};

newGame.addEventListener("click", resetGame);
resetgame.addEventListener("click", resetGame);
