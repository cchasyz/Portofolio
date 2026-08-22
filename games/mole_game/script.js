const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const moleImg = new Image();
moleImg.src = './6289336464160441628-removebg-preview (1).png';
const hammerImg = new Image();
hammerImg.src = './6291707505151166199-removebg-preview.png';
const scoreText = document.getElementById('score');
const timerText = document.getElementById('timer');
const lifeText = document.getElementById('life');
const resetbtn = document.getElementById('reset');
let cursor = {
  x: 0,
  y: 0
}
let gameInterval;
let timeInterval;
let moles = {};
let score = 0;
let timer = 30;
let life = 5;

function drawMap(){
  c.fillStyle = 'green';
  c.fillRect(0,0,canvas.width,canvas.height);
}
function drawGrid(){
  c.fillStyle = 'brown';
  c.fillRect(50,50,150,150);
  c.fillRect(220,50,150,150);
  c.fillRect(390,50,150,150);

  c.fillRect(50,220,150,150);
  c.fillRect(220,220,150,150);
  c.fillRect(390,220,150,150);

  c.fillRect(50,390,150,150);
  c.fillRect(220,390,150,150);
  c.fillRect(390,390,150,150);
}

function makeMole(){
  const position = [50,220,390];
  const randomX = Math.floor(Math.random() * position.length);
  const randomY = Math.floor(Math.random() * position.length);
  moles.x = position[randomX];
  moles.y = position[randomY];
  console.log(moles);
  drawMole();
}

function drawMole(){
  c.drawImage(moleImg,moles.x,moles.y,150,150);
}

function checkHit(x,y){
  const right = moles.x + 150;
  const left = moles.x;
  const top = moles.y;
  const down = moles.y + 150;

  if(x > left &&
    x < right &&
    y > top &&
    y < down
  ){
    console.log('hit');
    score+=1;
    scoreText.innerText = score;
  } else {
    console.log('miss');
    life-=1;
    lifeText.innerText = life;
  }
}

function checkGameOver(){
    if(timer <= 0 || life <= 0){
      highscoreCounter();
      leaderboard.style.display = 'flex';
      let leaderboardData = JSON.parse(localStorage.getItem('leaderboard'));
    leaderboardData.sort((a,b)=>{
      return b.highscore - a.highscore
    })
    console.log(leaderboardData);
    const leaderboardTable = document.getElementById('leaderboardTable');
    leaderboardTable.innerHTML = '';
    leaderboardTable.innerHTML = '<tr><th>Rank</th><th>Name</th><th>Score</th></tr>';
    leaderboardData.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${index + 1}</td><td>${item.name}</td><td>${item.highscore}</td>`
      leaderboardTable.appendChild(row);
    });
    game.style.display = 'none';
    clearInterval(gameInterval);
    clearInterval(timeInterval);
  }
}

canvas.addEventListener('click', function(e){
  checkHit(e.offsetX,e.offsetY);
  checkGameOver();
})

canvas.addEventListener('mousemove', (e)=>{
  cursor.x = e.offsetX;
  cursor.y = e.offsetY;
})

function drawHammer(x,y){
  c.drawImage(hammerImg,x,y,50,50);
}
// resetbtn.addEventListener('click', resetGame)

function loop(){
  drawMap();
  drawGrid();
  drawMole();
  drawHammer(cursor.x - 50 / 2, cursor.y - 50 / 2);
  requestAnimationFrame(loop);
}

function resetGame(){
  score = 0;
  timer = 30;
  life = 5;
  scoreText.innerText = score;
  timerText.innerText = timer;
  lifeText.innerText = life;
  startGame();
}
function startGame(){
  timeInterval = setInterval(()=>{
    timer-=1;
    timerText.innerText = timer;
  },1000)

  gameInterval = setInterval(()=>{
    drawMap();
    drawGrid();
    makeMole();
    checkGameOver();
    console.log('game interval')
  },1000)
}

function highscoreCounter(){
  const name = usninput.value;
  let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));

  //kalo leaderboard kosong, buat kolom baru
  if(!leaderboard){
    let highscore = score;
    localStorage.setItem('leaderboard', JSON.stringify([{name, highscore}]))
  }

  let FindLeaderboard = leaderboard.find((item) => {
    return item.name === name;
  }) 

  //kalo tidak nemu name di leadaerboard, buat kolom baru dengan name yg sekarang
  if(!FindLeaderboard){
    let highscore = score;
    leaderboard.push({name, highscore})
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  }

  //kalo nemu name, cek score, kalo score lebih besar, update score
  if(FindLeaderboard){
    let userData = FindLeaderboard;

    if(userData.highscore < score){
      userData.highscore = score;
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
    }
  } 
}

drawMap();
drawGrid();
loop();
// moleImg.onload = startGame;