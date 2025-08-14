const ball = document.getElementById("ball");
const paddle = document.getElementById("paddle");
const gameScore = document.getElementById("score");

let ballX = 200;
let ballY = 0;
let paddleX = 160;
let score = 0;
let speed = 5 ;

const paddleWidth = 80;
const ballWidth = 20;


paddle.style.left = paddleX + "px";
ball.style.left = ballX + "px";
ball.style.top = ballY + "px";


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && paddleX > 0) {
    paddleX -= 20;
  } else if (event.key === "ArrowRight" && paddleX < 320) {
    paddleX += 20;
  }
  paddle.style.left = paddleX + "px";
});


function gameLoop() {
  ballY += speed;
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  
  if (
    ballY + ballWidth >= 480 &&
    ballY + ballWidth <= 500 &&
    ballX + ballWidth > paddleX &&
    ballX < paddleX + paddleWidth
  ) {
    score++;
    speed += 0.5; 
    gameScore.textContent = `Score: ${score}`;
    resetBall();
  } else if (ballY > 500) {
    alert("Game Over! Your score: " + score);
    clearInterval(loop);
  }
}

function resetBall() {
  ballX = Math.floor(Math.random() * (400 - ballWidth));
  ballY = 0;
}

const loop = setInterval(gameLoop, 50);
