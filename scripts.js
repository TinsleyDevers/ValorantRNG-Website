const map = document.querySelector('.map');
const agent = document.querySelector('.agent');
const primary = document.querySelector('.primary');
const secondary = document.querySelector('.secondary');
const abilities = document.querySelector('.abilities');
const armor = document.querySelector('.armor');
const challenge = document.querySelector('.challenge');
const rerollBtn = document.querySelector('.reroll');

const maps = [
  { name: 'Bind', img: 'https://example.com/bind.jpg' },
  { name: 'Haven', img: 'https://example.com/haven.jpg' },
  { name: 'Split', img: 'https://example.com/split.jpg' },
  { name: 'Breeze', img: 'https://twinfinite.net/wp-content/uploads/2021/06/4_27_2021_Patch2.8Article_Banner.jpg' },
  // Add more map objects
];

const agents = [
  { name: 'Brimstone', img: 'https://example.com/brimstone.jpg' },
  { name: 'Viper', img: 'https://example.com/viper.jpg' },
// Add more agent objects
{ name: 'Omen', img: 'https://example.com/omen.jpg' },
{ name: 'Killjoy', img: 'https://example.com/killjoy.jpg' },
// ... and so on for all agents
];

const primaryGuns = [
'Stinger', 'Spectre', 'Bucky', 'Judge', 'Bulldog', 'Guardian', 'Phantom', 'Vandal', 'Marshal', 'Operator', 'Ares', 'Odin', 'Knife', 'None'
];

const secondaryGuns = [
'Classic', 'Shorty', 'Frenzy', 'Ghost', 'Sheriff', 'None'
];

const abilitiess = ['Full', 'Half', '1 of each', 'None'];
const armors = ['None', 'Half', 'Full'];

const challenges = [
"Silent but deadly: You must set your game’s master volume to 0",
// ... and so on for all challenges
];

function getRandomItem(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomLoadout() {
let primary = getRandomItem(primaryGuns);
let secondary = getRandomItem(secondaryGuns);

while (primary === 'None' && secondary === 'None') {
  primary = getRandomItem(primaryGuns);
  secondary = getRandomItem(secondaryGuns);
}

return {
  primary,
  secondary,
  abilities: getRandomItem(abilitiess),
  armor: getRandomItem(armors),
};
}

function updateMap() {
const selectedMap = getRandomItem(maps);
map.textContent = selectedMap.name;
document.body.style.backgroundImage = `url(${selectedMap.img})`;
}

function updateAgent() {
const selectedAgent = getRandomItem(agents);
agent.textContent = selectedAgent.name;
agent.style.backgroundImage = `url(${selectedAgent.img})`;
}

function updateLoadout() {
const loadout = getRandomLoadout();
primary.textContent = loadout.primary;
secondary.textContent = loadout.secondary;
abilities.textContent = loadout.abilities;
armor.textContent = loadout.armor;
}

function updateChallenge() {
challenge.textContent = getRandomItem(challenges);
}

function updateAll() {
updateMap();
updateAgent();
updateLoadout();
updateChallenge();
}

rerollBtn.addEventListener('click', updateAll);

updateAll();