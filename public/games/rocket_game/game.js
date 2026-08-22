const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 600;

const rocket = new Image();
rocket.src = 'MEDIA/Rocket1.png';
const star = new Image();
star.src = 'MEDIA/StarThin.png';
const star2 = new Image();
star2.src = 'MEDIA/StarSmall.png';
const star3 = new Image();
star3.src = 'MEDIA/StarLong.png';
const shotpic = new Image();
shotpic.src = 'MEDIA/Bullet.png';
const pizzapic = new Image();
pizzapic.src = 'MEDIA/Pizza1.png';
const death = new Image();
death.src = 'MEDIA/LargeBurst1.png';

const scoreText = document.getElementById('score');
const stars = [
  star, star2, star3
]

let pizzaInterval;
let shotsInterval;
let running = false;
let score = 0;
let shots = [];
let keys = {};
let starMovement = [];
let pizzas = [];
let rocketMovement = {x: 0, y: canvas.height / 2 - 41}

  window.addEventListener('keydown', (e) => {
    keys[e.keyCode] = true;
  });
  
  window.addEventListener('keyup', (e) => {
    keys[e.keyCode] = false;
  });

  function updateRocketMovement() {
    if (keys[87] || keys[38]) rocketMovement.y -= 5;
    if (keys[83] || keys[40]) rocketMovement.y += 5;
    if (keys[65] || keys[37]) rocketMovement.x -= 5;
    if (keys[68] || keys[39]) rocketMovement.x += 5;
  
    rocketMovement.x = Math.max(0, Math.min(canvas.width - 108, rocketMovement.x));
    rocketMovement.y = Math.max(0, Math.min(canvas.height - 41, rocketMovement.y));
  }

function makePizza(){
  const randomSize = Math.floor(Math.random() * (180 - 55) + 55)
  const randomY = Math.random() * (canvas.height - randomSize)

  pizzas.push({x: canvas.width, y: randomY, size: randomSize, life: 3, dead: false, deadTimer: 7})
}

function makeShots(){
  shots.push({x: rocketMovement.x + 108, y: rocketMovement.y + 24})
}
  
function makeStars(){
  const randomPic = Math.floor(Math.random() * 3);
  const randomY = Math.random() * canvas.height;
  
  starMovement.push({pic: stars[randomPic], x: canvas.width, y: randomY});
}

function gameover(){
  running = false;
  clearInterval(shotsInterval);
  clearInterval(pizzaInterval);
  gameoverView.style.display = 'flex';
  gameView.style.display = 'none';
  nametextgameover.innerHTML = nameinput.value;
  scoretextgameover.innerHTML = score;
}

function checkPizzaDie() {
  for (let i = pizzas.length - 1; i >= 0; i--) {
    const pizza = pizzas[i];

    if (pizza.x <= 0) {
      pizzas.splice(i, 1);
      gameover()
    }

    if(pizza.dead == false){
      if(
        rocketMovement.x < pizza.x + pizza.size && 
        rocketMovement.x + 95 > pizza.x && 
        rocketMovement.y < pizza.y + pizza.size && 
        rocketMovement.y + 35 > pizza.y 
      ){
        gameover() 
      }
    }

    for (let j = shots.length - 1; j >= 0; j--) {
      const shot = shots[j];
      if (
        shot.x < pizza.x + pizza.size && 
        shot.x + 10 > pizza.x && 
        shot.y < pizza.y + pizza.size && 
        shot.y + 10 > pizza.y 
      ) {
        pizza.life -= 1;
        score += 1;
        shots.splice(j, 1);
        if(pizza.life <= 0){
          score += 2
          pizza.dead = true
        }
      }
    }
  }
}

function checkShotDie(){
  for(let i = 0; i < shots.length - 1; i++){
    if(shots[i].x >= canvas.width){
      shots.splice(i,1)
    }
  }
}

function checkStarsDie(){
  for(let i = 0; i < starMovement.length - 1; i++){
    if(starMovement[i].x <= 0){
      starMovement.splice(i,1)
    }
  }
}

function draw(){
  c.fillStyle = 'black';
  c.fillRect(0,0,canvas.width,canvas.height);

  starMovement.forEach(star => {
      c.drawImage(star.pic, star.x, star.y);
  });

  c.drawImage(rocket, rocketMovement.x, rocketMovement.y, 108, 41);
  shots.forEach(shot => {
    c.drawImage(shotpic, shot.x, shot.y)
  });

  pizzas.forEach((pizza, index) => {
    if (pizza.dead) {
      // Draw death image
      c.drawImage(death, pizza.x, pizza.y, pizza.size, pizza.size);

      // Decrement death timer
      pizza.deadTimer--;
      if (pizza.deadTimer <= 0) {
        pizzas.splice(index, 1); // Remove pizza when timer is up
      }
    } else {
      // Draw regular pizza
      c.drawImage(pizzapic, pizza.x, pizza.y, pizza.size, pizza.size);
    }
  });
}

function loop(){
  updateRocketMovement();

  shots.forEach(shot => {
    shot.x += 7;
  })

  pizzas.forEach(pizza => {
    if(pizza.dead == false){
      pizza.x -= 3
    } 
  })

  starMovement.forEach(star => {
    if(star.pic == star2){
      star.x -= 5;
    } else {
      star.x -= 8;
    }
  });

  scoreText.innerHTML = score;
  
  draw();
  checkStarsDie();
  checkShotDie();
  checkPizzaDie();

  if(running){
    requestAnimationFrame(loop);
  }
}

function leaderboard(){
  const name = nameinput.value;
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  console.log(leaderboard);
  const getLeaderboard = leaderboard.find((item)=>{
    return item.name === name
  });

  if(!getLeaderboard){
    leaderboard.push({name: name, highscore: score});
    console.log(leaderboard);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
    return
  } else {
    if(getLeaderboard.highscore < score){
      getLeaderboard.highscore = score;
      console.log(leaderboard);
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
    }
  }
}