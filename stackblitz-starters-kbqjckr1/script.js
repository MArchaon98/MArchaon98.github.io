const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: 180,
  y: 550,
  width: 40,
  height: 40,
  color: "lime",
  speed: 5
};

const obstacles = [];
let gameOver = false;

// Control input
let keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Game loop
function gameLoop() {
  if (gameOver) return showGameOver();

  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function update() {
  // Move player
  if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
  if (keys["ArrowRight"] && player.x < canvas.width - player.width) player.x += player.speed;

  // Create obstacles
  if (Math.random() < 0.02) {
    obstacles.push({
      x: Math.random() * (canvas.width - 30),
      y: -20,
      width: 30,
      height: 30,
      speed: 3 + Math.random() * 2
    });
  }

  // Move obstacles
  for (let i = 0; i < obstacles.length; i++) {
    const obs = obstacles[i];
    obs.y += obs.speed;

    // Check collision
    if (
      obs.x < player.x + player.width &&
      obs.x + obs.width > player.x &&
      obs.y < player.y + player.height &&
      obs.y + obs.height > player.y
    ) {
      gameOver = true;
    }
  }

  // Remove off-screen obstacles
  while (obstacles.length && obstacles[0].y > canvas.height) {
    obstacles.shift();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Draw obstacles
  ctx.fillStyle = "red";
  for (const obs of obstacles) {
    ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
  }
}

function showGameOver() {
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("Game Over!", 120, 300);
}

gameLoop();
