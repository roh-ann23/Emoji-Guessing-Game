const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  { description: "Face with tears of joy", emoji: "😂" },
  { description: "Thinking face", emoji: "🤔" },
  { description: "Winking face", emoji: "😉" },
  { description: "Fire", emoji: "🔥" },
  { description: "Red heart", emoji: "❤️" }
];

  let currentIndexNumber = 0;
  let score = 0;
  let timer;
  let seconds = 45;

  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const timerElement = document.getElementById("timer");

 function displayEmoji(){
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentIndexNumber].emoji;
    timerElement.textContent = `Time: ${seconds}`;
  }
//   console.log(displayEmoji());

function checkGuess(){
    const guess = guessInput.value.trim().toLowerCase();
    const correctElement = emojiDetails[currentIndexNumber].description.trim().toLowerCase();

    if(guess === correctElement){
        resultElement.textContent = "Correct!";
        score++;
    }
    else{
        resultElement.textContent = "wrong!"
    }
    console.log(score);
    scoreElement.textContent = (`score: ${score}`);
    guessInput.value = "";      
    guessInput.focus();
    nextEmoji();
};

function nextEmoji(){
    currentIndexNumber++;

    setTimeout(()=>{
      resultElement.textContent = "";
    },1000)

    if(currentIndexNumber == emojiDetails.length){
        currentIndexNumber = 0;
        score = 0;
    }
    displayEmoji();
}


    guessInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
    startTimer();
  });

  function startTimer(){
    timer = setInterval(()=>{
      seconds--;
      timerElement.textContent = `Time: ${seconds}`;
   
    
    if(seconds<= 0){
      endGame();
    }
  },1000)
  }

  function endGame() {
    clearInterval(timer);
    document.getElementById("guess-input").disabled = true;
    timerElement.textContent = "";
    restartButton.style.display = "inline-block"; 
}

const restartButton = document.getElementById("restart-button");

  restartButton.addEventListener("click", () => {
      restartGame();
  });

  function restartGame() {
      clearInterval(timer);
      currentIndexNumber = 0;
      score = 0;
      seconds = 30;
      guessInput.disabled = false;
      scoreElement.textContent = "Score: 0";
      displayEmoji();
      startTimer();
      restartButton.style.display = "none"; 
  }
  