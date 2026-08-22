const menuView = document.getElementById('menu')
const gameView = document.getElementById('game')
const nameinput = document.getElementById('nameinput')
const playbtn = document.getElementById('playbtn')
const instructionsbtn = document.getElementById('instructionsbtn')
const leaderboardbtn = document.getElementById('leaderboardbtn')
const gameoverView = document.getElementById('gameover')
const nametextgameover = document.getElementById('nametextgameover')
const scoretextgameover = document.getElementById('scoretextgameover')
const restartbtngameover = document.getElementById('restartbtngameover')
const menubtngameover = document.getElementById('menubtngameover')
const savebtngameover = document.getElementById('savebtngameover')
const instructionsView = document.getElementById('instructionsView')
const menubtninstructions = document.getElementById('menubtninstructions')
const leaderboardView = document.getElementById('leaderboardView')
const leaderboardtable = document.getElementById('leaderboardtable')
const menubtnleaderboard = document.getElementById('menubtnleaderboard')

playbtn.disabled = true;
nameinput.addEventListener('input', () => {
  if(nameinput.value !== ''){
    playbtn.disabled = false;
  } else {
    playbtn.disabled = true;
  }
})

playbtn.addEventListener('click', () => {
  menuView.style.display = 'none';
  gameView.style.display = 'flex';
  running = true;
  score = 0;
  shots = [];
  keys = {};
  starMovement = [];
  pizzas = [];
  rocketMovement = {x: 0, y: canvas.height / 2 - 41}
  shotsInterval = setInterval(() => {
    makeStars()
    makeShots()
  }, 200);
  pizzaInterval = setInterval(()=>{
    makePizza()
  }, 1000)
  loop();
})

restartbtngameover.addEventListener('click', () => {
  gameoverView.style.display = 'none';
  gameView.style.display = 'flex';
  running = true;
  score = 0;
  shots = [];
  keys = {};
  starMovement = [];
  pizzas = [];
  rocketMovement = {x: 0, y: canvas.height / 2 - 41}
  shotsInterval = setInterval(() => {
    makeStars()
    makeShots()
  }, 200);
  pizzaInterval = setInterval(()=>{
    makePizza()
  }, 1000)
  loop();
})

menubtngameover.addEventListener('click', ()=> {
  gameoverView.style.display = 'none';
  menuView.style.display = 'flex';
})

instructionsbtn.addEventListener('click', () => {
  instructionsView.style.display = 'flex';
  menuView.style.display = 'none';
})

menubtninstructions.addEventListener('click', () => {
  instructionsView.style.display = 'none';
  menuView.style.display = 'flex';
})

menubtnleaderboard.addEventListener('click', () => {
  leaderboardView.style.display = 'none';
  menuView.style.display = 'flex';
})

savebtngameover.addEventListener('click', ()=>{
  leaderboard();
  getLeaderboard();
  gameoverView.style.display = 'none';
  leaderboardView.style.display = 'flex';
})

leaderboardbtn.addEventListener('click', () => {
  if(!JSON.parse(localStorage.getItem('leaderboard'))){
    alert('leaderboard empty!')
    return
  } else{
    getLeaderboard();
    menuView.style.display = 'none';
    leaderboardView.style.display = 'flex';
  }
})

function getLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
  const tableBody = document.querySelector('#leaderboardtable tbody');
  
  tableBody.innerHTML = `
      <th>
        <tr>
          <th>rank</th>
          <th>name</th>
          <th>highscore</th>
        </tr>
      </th>`;

  leaderboard.sort((a, b) => b.highscore - a.highscore)
    .forEach((user, index) => {
      tableBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.highscore}</td>
        </tr>
      `;
    });
}
