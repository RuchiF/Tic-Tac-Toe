let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let newGame = document.querySelector("#NewGame");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = " ";
    // msgContainer.classList.add("hide");
  }
};
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msg_container.classList.add("hide");
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations! , Winner is ${winner}`;
  msg_container.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1_val = boxes[pattern[0]].innerText;
    let pos2_val = boxes[pattern[1]].innerText;
    let pos3_val = boxes[pattern[2]].innerText;
    if (pos1_val != "" && pos2_val != "" && pos3_val != "") {
      if (pos1_val === pos2_val && pos2_val === pos3_val) {
        console.log("Winner", pos1_val);
        showWinner(pos1_val);
      }
    }
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);