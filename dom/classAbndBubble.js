// Access element by getElementsByClassName-->
const players = document.getElementsByClassName('player');

function setPlayerStyle(player) {
  player.style.border = '2px solid red';
  player.style.margin = '10px';
  player.style.padding = '15px';
  player.style.borderRadius = '10px';
}
for (const player of players) {
  setPlayerStyle(player);
  /* player.addEventListener('click', function () {
    player.style.backgroundColor = 'yellow';
  }); */
}

// add more button event-->
function addMore() {
  const playerContainer = document.getElementById('players');

  const player = document.createElement('div');
  player.classList.add('player');

  player.innerHTML = `
        <h2>Player-4</h2>
        <p>
          Impedit reiciendis accusantium dicta a facilis, numquam molestiae laboriosam odio accusamus quidem,
          corporis non ea nisi debitis. Voluptates sit dolores, quibusdam necessitatibus, quidem illum totam
          officiis, tenetur corrupti deleniti corporis.
        </p>
        `;
  playerContainer.appendChild(player);

  setPlayerStyle(player);
  /*  player.addEventListener('click', function () {
    player.style.backgroundColor = 'yellow';
  }); */
}

// use event-bubble-->
document.getElementById('players').addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() == 'div') {
    event.target.style.backgroundColor = 'yellow';
  } else {
    event.target.parentNode.style.backgroundColor = 'yellow';
  }
});
