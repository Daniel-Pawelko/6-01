let randomNum
let userNum = 1;
userNum = parseInt(userNum)

createRandom()

function createRandom() {
  randomNum = Math.floor((Math.random() * 6) + 1);
  console.log(randomNum)
}


function checkGuess() {
  let userNum = document.getElementById("userGuess").value;

  if (userNum == randomNum){
    console.log("Congrats you guessed correctly")
  } else if (isNaN(userNum)) {
    console.log("Please input a valid number")

  } else {
    console.log("sorry try again :(")
  }

}