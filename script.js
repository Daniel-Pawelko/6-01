let randomNum
const output = document.getElementById('outputLog')

createRandom()

function createRandom () {
  randomNum = Math.floor((Math.random() * 6) + 1)
  console.log(randomNum)
}

function checkGuess () {
  const userNum = document.getElementById('userGuess').value

  if (userNum == randomNum) {
    console.log('Congrats you guessed correctly')
    output.innerHTML = 'Congrats you guessed correctly'
    output.style.color = 'green'
  } else if (isNaN(userNum)) {
    console.log('Please input a valid number')
    output.innerHTML = 'Please input a valid number'
    output.style.color = 'red'
  } else {
    console.log('sorry try again :(')
    output.innerHTML = 'sorry try again :('
    output.style.color = 'red'
  }
}
