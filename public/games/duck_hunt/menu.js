const menu = document.getElementById('menu');
const usn = document.getElementById('usn');
const difficulty = document.getElementById('difficulty');
const startbtn = document.getElementById('startbtn');
const leaderboardbtn = document.getElementById('leaderboardbtn');
const leaderboardbtn2 = document.getElementById('leaderboardbtn2');
const leaderboard = document.getElementById('leaderboard');
const leaderboardTable = document.getElementById('leaderboardTable');
const game = document.getElementById('game');
const menubtn = document.getElementById('backtomenubtn');
const menubtn2 = document.getElementById('backtomenubtn2');
const menubtn3 = document.getElementById('backtomenubtn3');
const gameoverScreen = document.getElementById('gameover');
const restartbtn = document.getElementById('restartbtn');
const pauseWindow = document.getElementById('pauseWindow');
const resumebtn = document.getElementById('resumebtn');
const resetbtn = document.getElementById('resetbtn');

startbtn.addEventListener('click', ()=>{
  if(usn.value === ''){
    alert('Please enter your name');
    return
  } 
  menu.style.display = 'none';
  game.style.display = 'flex';
  start();
})

leaderboardbtn.addEventListener('click', ()=>{
  menu.style.display = 'none';
  leaderboard.style.display = 'flex';

  let leaderboardData = JSON.parse(localStorage.getItem('leaderboard'));
  leaderboardData.sort((a,b)=>{
    return b.score - a.score;
  })

  leaderboardTable.innerHTML = '';
  leaderboardTable.innerHTML = '<tr><th>Rank</th><th>Name</th><th>Highscore</th><th>difficulty</th></tr>';

  leaderboardData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td><td>${item.name}</td><td>${item.score}</td><td>${item.mode}</td>`
    leaderboardTable.appendChild(row);
  });
})

leaderboardbtn2.addEventListener('click', ()=>{
  leaderboard.style.display = 'flex';
  game.style.display = 'none';
  gameoverScreen.style.display = 'none';

  let leaderboardData = JSON.parse(localStorage.getItem('leaderboard'));
  leaderboardData.sort((a,b)=>{
    return b.score - a.score;
  })

  leaderboardTable.innerHTML = '';
  leaderboardTable.innerHTML = '<tr><th>Rank</th><th>Name</th><th>Highscore</th><th>difficulty</th></tr>';

  leaderboardData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td><td>${item.name}</td><td>${item.score}</td><td>${item.mode}</td>`
    leaderboardTable.appendChild(row);
  })
})

resumebtn.addEventListener('click', ()=>{
  running = true;
  pauseWindow.style.display = 'none';
  if(running){
    spawnDuck = setInterval(makeDuck, duckSpawnInterval);
  } 
  loop();
})

window.addEventListener('keydown', (e)=>{
  const key = e.keyCode;
  const esc = 27;

  if(key == esc && running){
    running = false;
    clearInterval(spawnDuck);
    pauseWindow.style.display = 'flex';
  }
})

resetbtn.addEventListener('click', ()=>{
  pauseWindow.style.display = 'none';
  start();
})
restartbtn.addEventListener('click', ()=>{
  gameoverScreen.style.display = 'none';
  start();
})

menubtn.addEventListener('click', ()=>{
  menu.style.display = 'flex';
  gameoverScreen.style.display = 'none';
  game.style.display = 'none';
})
menubtn2.addEventListener('click', ()=>{
  menu.style.display = 'flex';
  leaderboard.style.display = 'none';
})
menubtn3.addEventListener('click', ()=>{
  leaderboardCounter();
  menu.style.display = 'flex';
  pauseWindow.style.display = 'none';
  game.style.display = 'none';
})