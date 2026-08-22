const startbtn = document.getElementById('startbtn');
const menubtn = document.getElementById('menubtn');
const menubtn2 = document.getElementById('menubtn2');
const tutorialbtn = document.getElementById('tutorialbtn');
const leaderboardbtn = document.getElementById('leaderboardbtn');
const menu = document.getElementById('menu');
const tutorial = document.getElementById('tutorial');
const game = document.getElementById('game');
const leaderboard = document.getElementById('leaderboard');
const usninput = document.getElementById('usninput');

startbtn.addEventListener('click', ()=>{
  if(usninput.value.trim() === ''){
    usninput.value = 'Player';
  }
  menu.style.display = 'none';
  game.style.display = 'flex';
  resetGame();
})

menubtn.addEventListener('click', function(){
  menu.style.display = 'flex';
  leaderboard.style.display = 'none';
  game.style.display = 'none';
  tutorial.style.display = 'none';
  clearInterval(gameInterval);
  clearInterval(timeInterval);
})

menubtn2.addEventListener('click', function(){
  menu.style.display = 'flex';
  leaderboard.style.display = 'none';
  game.style.display = 'none';
  tutorial.style.display = 'none';
  clearInterval(gameInterval);
  clearInterval(timeInterval);
})

tutorialbtn.addEventListener('click', function(){
  menu.style.display = 'none';
  tutorial.style.display = 'flex';
})

leaderboardbtn.addEventListener('click', ()=>{
  menu.style.display = 'none';
  leaderboard.style.display = 'flex';
  let leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];
  
  leaderboardData.sort((a,b)=>{
    return (b.highscore || 0) - (a.highscore || 0);
  })

  const leaderboardTable = document.getElementById('leaderboardTable');
  leaderboardTable.innerHTML = '<thead><tr><th>Rank</th><th>Name</th><th>Highscore</th></tr></thead><tbody></tbody>';
  const tbody = leaderboardTable.querySelector('tbody');
  
  if (leaderboardData.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3">No games recorded yet!</td></tr>';
  } else {
    leaderboardData.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${index + 1}</td><td>${item.name}</td><td>${item.highscore}</td>`;
      tbody.appendChild(row);
    });
  }
})