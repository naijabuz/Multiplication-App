// FORM QUESTION

const firstNumber = Math.ceil(Math.random() * 10); // Creating the first random number from 1 to 10, and storing it in a variable

const secondNumber = Math.floor(Math.random() * 15); // Creating the second random number from 0 to 14, and storing it in a variable

let question = document.getElementById("question"); // Retreiving the form question from the html document

question.innerHTML = `What is ${firstNumber} multiplied by ${secondNumber} ?`; // Replacing the hardcoded form text question with a dynamic value

const correctAnswer = firstNumber * secondNumber; // multiplying the 2 numbers together

// SCORE

const getScore = document.getElementById("score"); // Retrieving the score hardcoded value

let score = JSON.parse(localStorage.getItem("userScore")); // the score value the user sees

if (!score || score < 0) {
  score = 0;
}

// FORM

const form = document.getElementById("form"); // Getting the form and storing it

getScore.innerText = `Score: ${score}`; // Replaces the hardcoded value with a dynamic updating value

form.addEventListener("submit",()=>{

    const userAnswer = Number(input.value);

    if (userAnswer === correctAnswer) {
          score = score + 1
          console.log(score);
          updateDataStorage();

    } else if (userAnswer !== correctAnswer) {
          score = score - 1;
          updateDataStorage();
    }

    else {
          score = score;
    }
});

function updateDataStorage() {
  localStorage.setItem("userScore", JSON.stringify(score))
} // function for storing the user score in the browser local storage































