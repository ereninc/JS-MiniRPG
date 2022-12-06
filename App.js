const storeBtn = document.getElementById("storeBtn");
const dungeonBtn = document.getElementById("dungeonBtn");
const bossBtn = document.getElementById("bossBtn");

const onStoreBtn = function () {
  console.log("Went to the store!");
};

const onDungeonBtn = function () {
  console.log("Went to the dungeon!");
};

const onBossBtn = function () {
  console.log("Went for boss!");
};

storeBtn.addEventListener("click", onStoreBtn);
dungeonBtn.addEventListener("click", onDungeonBtn);
bossBtn.addEventListener("click", onBossBtn);
