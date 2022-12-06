const tavernBtn = document.getElementById("tavernBtn");
const dungeonBtn = document.getElementById("dungeonBtn");
const bossBtn = document.getElementById("bossBtn");

const xpText = document.getElementById("xpText");
const hpText = document.getElementById("hpText");
const goldText = document.getElementById("goldText");
const levelText = document.getElementById("levelText");
const dmgText = document.getElementById("damageText");

const onTavernBtn = function () {
  onTavern();
};

const onDungeonBtn = function () {
  onDungeon();
};

const onBossBtn = function () {
  onBoss();
};

tavernBtn.addEventListener("click", onTavernBtn);
dungeonBtn.addEventListener("click", onDungeonBtn);
bossBtn.addEventListener("click", onBossBtn);

let xpVal = 0;
let hpVal = 100;
let goldVal = 100;
let levelVal = 1;
let damageVal = 50;
let isGameOver = false;
function onInitialize() {
  isGameOver = false;
  xpText.textContent = xpVal;
  hpText.textContent = hpVal;
  goldText.textContent = goldVal;
  levelText.textContent = levelVal;
  dmgText.textContent = damageVal;
}

onInitialize();

function onTavern() {
  updateHP(100);
  updateGold(-5);
}
function onDungeon() {
  updateHP(-20);
  updateGold(10);
  updateXP(10);
}
function onBoss() {}

function updateHP(val) {
  hpVal += val;
  hpText.textContent = hpVal;
  if (hpVal >= 100) {
    hpVal = 100;
    hpText.textContent = hpVal;
  } else if (hpVal <= 0) {
    hpVal = 0;
    hpText.textContent = hpVal;
    onGameEnd();
  }
}

function updateGold(val) {
  goldVal = val;
  goldVal.textContent = goldVal;
}

function updateXP() {
  xpVal++;
  if (xpVal >= 100) {
    xpVal = 0;
    updateLevel();
  }
  xpVal.textContent = xpVal;
}

function updateLevel() {
  levelVal++;
  levelText.textContent = levelVal;
}

function updateDamage(val) {
  damageVal = val;
  dmgText.textContent = damageVal;
}

function onGameEnd() {
  alert("GAME OVER.. YOU DIED.");
  isGameOver = true;
}
