const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
const scoreText = document.getElementById('score');
const resetButton = document.getElementById('resetbtn');
const startButton = document.getElementById('startbtn');
const leaderboardButton = document.getElementById('leaderboardbtn');
const startMenu = document.getElementById('menu');

const width = canvas.width;
const height = canvas.height;

const bg = 'white';
const snakecolor = 'black';
const snakeborder = 'gray';
const foodcolor = 'red';
const unitsize = 25;
let level;
let running = false;
let xspeed = unitsize;
let yspeed = 0;
let xfood;
let yfood;
let score = 0;
let snake = [
  {x:unitsize * 4, y:0},
  {x:unitsize * 3, y:0},
  {x:unitsize * 2, y:0},
  {x:unitsize, y:0},
  {x:0, y:0}
]

const getmenu = document.getElementById('getmenu');
getmenu.addEventListener('click', getmenu1);
window.addEventListener('keydown', changeDir);
startButton.addEventListener('click', startbutton);
resetButton.addEventListener('click', reset);
leaderboardButton.addEventListener('click', leaderboard);

function getmenu1 (){
  startMenu.style.display = 'flex';
}

function leaderboard(){
  leaderboardview = document.getElementById('Leaderboardview')
  const theleaderboard = JSON.parse(localStorage.getItem('leaderboard'))
  // console.log(theleaderboard)
  leaderboardview.style.display = 'flex';
  const isi = theleaderboard.map(val => {
    return `
    <div class="per1">
    <p>player: ${val.name}</p>
    <p>highest score: ${val.highscore}</p>
    </div>
    `
  })
  window.hideldr = function(){
  leaderboardview.style.display = 'none';
  }
  leaderboardview.innerHTML = `
  ${isi}
  <button onclick="hideldr()">menu</button>
  `
}

function startbutton(){
  let name = document.getElementById('getName').value;
  level = document.getElementById('level').value;
  if(name === ''){
    alert('fill in ur name!')
  } else {
    localStorage.setItem('name', name);
    reset();
  }
}


function loop(){
  if(running){
    setTimeout(()=>{
      clearcanvas();
      drawfood();
      movesnake();
      drawsnake();
      checkgameover();
      loop();
    }, 125)
  } else{
    gameover();
  }
}
function gameStart(){
  startMenu.style.display = 'none';
  running = true;
  scoreText.textContent = score;
  createfood();
  loop();
}

function clearcanvas(){
  c.fillStyle = bg;
  c.fillRect(0, 0, width, height);
}

function createSingleFood(){
  function randomfood(min,max){
    const random = Math.round((Math.random() * (max - min) + min) / unitsize) * unitsize;
    return random;
  }
  xfood.push(randomfood(0, width - unitsize));
  yfood.push(randomfood(0, height - unitsize));
}
function createfood(){
  let foodcount;
  if(level === 'ez'){
    foodcount = 3;
  } else if(level === 'med'){
    foodcount = 2;
  } else if (level === 'hard'){
    foodcount = 1;
  }
  xfood = [];
  yfood = [];
  for(let i = 0; i < foodcount; i++){
  createSingleFood();
  }
  console.log(xfood,yfood)
}
function drawfood(){
  c.fillStyle = foodcolor;
  for(i = 0; i < xfood.length; i++){
    // c.fillRect(xfood[i], yfood[i], unitsize, unitsize);
    c.fillRect(xfood[i], yfood[i], unitsize, unitsize);
  }
}
function movesnake(){
  const head = {x: snake[0].x + xspeed,
                y: snake[0].y + yspeed}

  snake.unshift(head);
  let eaten = false;
  for(let i=0; i<food.length; i++){
  if(snake[0].x === xfood[i] && snake[0].y === yfood[i]){
    score+=1; 
    scoreText.textContent = score;
    xfood.splice(i,1);
    yfood.splice(i,1);
    eaten = true;
    createSingleFood();
    break;
  } 
 } 
 if(!eaten) {
    snake.pop();
  }
}
function drawsnake(){
  c.fillStyle = snakecolor;
  c.strokeStyle = snakeborder;
  snake.forEach(part => {
    c.fillRect(part.x, part.y, unitsize, unitsize);
    c.strokeRect(part.x, part.y, unitsize, unitsize);
  });
}
function changeDir(event){
  const key = event.keyCode;
  const up = 87;
  const right = 68;
  const down = 83;
  const left = 65;

  const up2 = (yspeed === -unitsize);
  const right2 = (xspeed === unitsize);
  const down2 = (yspeed === unitsize);
  const left2 = (xspeed === -unitsize);

  if(key === up && !down2) {
    setTimeout(()=>{
      xspeed = 0;
      yspeed = -unitsize;
    }, 75)
  } else if(key === right && !left2) {
    setTimeout(()=>{
      xspeed = unitsize;
      yspeed = 0;
    }, 75)
  } else if(key === down && !up2) {
    setTimeout(()=>{
    xspeed = 0;
    yspeed = unitsize;
    }, 75)
  } else if(key === left && !right2) {
    setTimeout(()=>{
    xspeed = -unitsize;
    yspeed = 0;
    }, 75)
  }
}
function checkgameover(){
  if(snake[0].x <= 0-unitsize || snake[0].x >= width-unitsize || snake[0].y <= 0-unitsize || snake[0].y >= height-unitsize){
    running = false;
  }
  for(let i = 1; i<snake.length; i+=1){
    if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
      gameover();
    }
  }
}
function gameover(){
  c.font = '40px Arial';
  c.fillStyle = 'red';
  c.textAlign = 'center';
  c.fillText("game over!", width/2, height/2);
  running = false;
  highscorecounter();
}
function reset(){
  score = 0;
  xspeed = unitsize;
  yspeed = 0;
  snake = [
    {x:unitsize * 4, y:0},
    {x:unitsize * 3, y:0},
    {x:unitsize * 2, y:0},
    {x:unitsize, y:0},
    {x:0, y:0}
  ]
  gameStart();
}

function highscorecounter(){
  const name = localStorage.getItem('name')
  let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
  if(!leaderboard){
    let highscore = score;
    console.log(score)
    localStorage.setItem('leaderboard', JSON.stringify([{name, highscore}]));
  }

  let indexLeaderboard = leaderboard.find((val) => {
  return val.name == name
  })

  if(indexLeaderboard){
      let userData = indexLeaderboard
      console.log(userData.highscore)
      console.log(score)

      if(userData.highscore < score){
        userData.highscore = score
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
      }

  } else {
    let highscore = 0;
    if(score > highscore){
        highscore = score
    }
    leaderboard.push({name, highscore})
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
  }


   // if(!localStorage.getItem('highscore')){
  //   let highscore = 0;
  //     if(score > highscore){
  //     localStorage.setItem('highscore', score);
  //     localStorage.setItem('leaderboard', [name, score]);
  //   }
  // } else {
  //   let highscore = localStorage.getItem('highscore')
  //   if(score > highscore){
  //     localStorage.setItem('highscore', score);
  //     if(){
  
  //     }
  //   }   
  // }
}

