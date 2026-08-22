const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

const lifeText = document.getElementById('life');
const scoreText = document.getElementById('score');
const shootSound = document.getElementById('shootSound');
const bg = new Image();
bg.src = './Background.png'
const duckimage = new Image();
duckimage.src = './duckhunt_various_sheet_cr-removebg-preview.png' 
const aim = new Image();
aim.src = './images (1).png'

let score = 0;
let running = false;
let life = 3;
let canshoot = true;
let mouse = {
  x: undefined,
  y: undefined
}
let ducks = [
  {
    x: undefined,
    y: undefined,
    speed: undefined
  }
]
let duckSpawnInterval;
let duckSpeed;
let spawnDuck;

canvas.addEventListener('mousemove', (e)=>{
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;

  if(running){
    drawAim();
  }
})

canvas.addEventListener('click', ()=>{  
  if(canshoot){
    shootSound.currentTime = 0;
    shootSound.play();
    canshoot = false;
    checkHit();
    setTimeout(()=>{
      canshoot = true;
    }, 1000)
  }
})

function start(){
  if(difficulty.value === 'ez'){
    duckSpawnInterval = 5000
    console.log('ez')
  } else if (difficulty.value === 'med'){
    duckSpawnInterval = 3000
    console.log('med')
  } else if (difficulty.value === 'hard'){
    duckSpawnInterval = 2000
    console.log('hard')
  }
  score = 0;
  life = 3;
  lifeText.innerHTML = life;
  scoreText.innerHTML = score;
  ducks = [
    {
      x: undefined,
      y: undefined,
      speed: undefined
    }
  ]
  running = true;
  if(running){
    spawnDuck = setInterval(makeDuck, duckSpawnInterval);
  } 
  loop();
}

function drawAim(){
  c.drawImage(aim, mouse.x -50 /2, mouse.y - 50 /2, 50, 50);
}

function drawBackround(){
  c.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function makeDuck(){
  const random = Math.floor(Math.random() * (canvas.height - 150))
  duckSpeed = Math.floor(Math.random() * 4  ) + 1;

  ducks.push({x: -50, y: random, speed: duckSpeed});

  drawDuck();
  // console.log('made 1')
  
}

function moveDuck(){
  ducks = ducks.filter(duck => {
    duck.x += duck.speed;
    if(duck.x > canvas.width){
      life -= 1;
      lifeText.innerHTML = life;
      return false;
    }
    return true;
  });
}

function drawDuck(){
  ducks.forEach(duck => {
    c.drawImage(duckimage, duck.x, duck.y, 91,83);
  })
}

function checkHit(){
  if(ducks.length == 0){
    console.log('miss');
    life -= 1;
    lifeText.innerHTML = life;
    return
  } 
  let hit = false;
  for(let i = 0; i < ducks.length; i++){
    const duck = ducks[i];
    if(mouse.x > duck.x &&
      mouse.x < duck.x + 91 &&
      mouse.y > duck.y &&
      mouse.y < duck.y + 83
    ){
      console.log('hit');
      hit = true;
      ducks.splice(i, 1);
      score+=1;
      scoreText.innerHTML = score;
      break;
    }
  }
  if(!hit){
    console.log('miss');
    life -= 1;
    lifeText.innerHTML = life;
    // nothit = false;
  }
}

function checkGameOver(){
  if(life <= 0){
    leaderboardCounter();
    running = false;
    clearInterval(spawnDuck);
    gameoverScreen.style.display = 'flex';
  }
}

function loop(){
  drawBackround();
  moveDuck();
  drawDuck();
  drawAim();
  checkGameOver();

  if(running){
    requestAnimationFrame(loop);
  }
}

function leaderboardCounter(){
  const name = usn.value; 
  const mode = difficulty.value;

  let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
  if(leaderboard === null){
    localStorage.setItem('leaderboard', JSON.stringify([{name, score, mode}]))
    return
  }

  let findLeaderboard = leaderboard.find((item)=>{
    return item.name == name && item.mode == mode;
  })

  if(!findLeaderboard){
    leaderboard.push({name, score, mode});
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
    return
  }

  if(findLeaderboard){
    if(findLeaderboard.score < score){
      findLeaderboard.score = score;
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
      return
    }
    return
  }
  console.log(leaderboard);
}