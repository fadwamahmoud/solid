const MonsterInterface = require("./monsterInterface");
const MonsterManager = require("./monsterManager");

const createWithInterfaceValidation = require("./interfaceHelpers");

// create monster manager

// create monster
var Kaiju = Object.create(MonsterInterface);
Kaiju.init = function (name) {
  this.name = name;
  this.type = "Kaiju";

  return this;
};
Kaiju.rampage = function (location) {
  console.log(
    "The " +
      this.type +
      " " +
      this.name +
      " is rampaging through " +
      location +
      "!"
  );
};

var GreatOldOne = Object.create(MonsterInterface);
GreatOldOne.init = function (name) {
  this.name = name;
  this.type = "Great Old One";

  return this;
};
GreatOldOne.rampage = function (location) {
  console.log(
    "The " +
      this.type +
      " " +
      this.name +
      " has awaken from its slumber in " +
      location +
      "!"
  );
};

var MythicalMonster = Object.create(MonsterInterface);
MythicalMonster.init = function (name) {
  this.name = name;
  this.type = "Mythical Monster";

  return this;
};
MythicalMonster.rampage = function (location) {
  console.log(
    "The " +
      this.type +
      " " +
      this.name +
      " has been sighted in " +
      location +
      "!"
  );
};

// Rampage!
var monsters = [];
var locations = ["Athens", "Budapest", "New York", "Santiago", "Tokyo"];

var rodan = createWithInterfaceValidation(Kaiju, MonsterInterface);
rodan.init("Rodan");
monsters.push(rodan);

var gzxtyos = createWithInterfaceValidation(GreatOldOne, MonsterInterface);
gzxtyos.init("Gzxtyos");
monsters.push(gzxtyos);

var cerberus = createWithInterfaceValidation(MythicalMonster, MonsterInterface);
cerberus.init("Cerberus");
monsters.push(cerberus);

var myMonsterManager = Object.create(MonsterManager);
myMonsterManager.init(monsters, locations);

myMonsterManager.rampageAll();
// Logs: (with variable city names)
// The Kaiju Rodan is rampaging through Tokyo!
// The Great Old One Gzxtyos has awaken from its slumber in Athens!
// The Mythical Monster Cerberus has been sighted in New York!

// const MonsterInterface = require("./monsterInterface");
// const MonsterManager = require("./monsterManager");

// const createWithInterfaceValidation = require("./interfaceHelpers");

// // create monster manager

// // create monster
// var Kaiju = Object.create(MonsterInterface);
// Kaiju.init = function (name) {
//   this.name = name;
//   this.type = "Kaiju";

//   return this;
// };
// Kaiju.rampage = function (location) {
//   console.log(
//     "The " +
//       this.type +
//       " " +
//       this.name +
//       " is rampaging through " +
//       location +
//       "!"
//   );
// };

// var GreatOldOne = Object.create(MonsterInterface);
// GreatOldOne.init = function (name) {
//   this.name = name;
//   this.type = "Great Old One";

//   return this;
// };
// GreatOldOne.rampage = function (location) {
//   console.log(
//     "The " +
//       this.type +
//       " " +
//       this.name +
//       " has awaken from its slumber in " +
//       location +
//       "!"
//   );
// };

// var MythicalMonster = Object.create(MonsterInterface);
// MythicalMonster.init = function (name) {
//   this.name = name;
//   this.type = "Mythical Monster";

//   return this;
// };
// MythicalMonster.rampage = function (location) {
//   console.log(
//     "The " +
//       this.type +
//       " " +
//       this.name +
//       " has been sighted in " +
//       location +
//       "!"
//   );
// };

// // Rampage!
// var monsters = [];
// var locations = ["Athens", "Budapest", "New York", "Santiago", "Tokyo"];

// var rodan = createWithInterfaceValidation(Kaiju, MonsterInterface);
// rodan.init("Rodan");
// monsters.push(rodan);

// var gzxtyos = createWithInterfaceValidation(GreatOldOne, MonsterInterface);
// gzxtyos.init("Gzxtyos");
// monsters.push(gzxtyos);

// var cerberus = createWithInterfaceValidation(MythicalMonster, MonsterInterface);
// cerberus.init("Cerberus");
// monsters.push(cerberus);

// var myMonsterManager = Object.create(MonsterManager);
// myMonsterManager.init(monsters, locations);

// myMonsterManager.rampageAll();
// // Logs: (with variable city names)
// // The Kaiju Rodan is rampaging through Tokyo!
// // The Great Old One Gzxtyos has awaken from its slumber in Athens!
// // The Mythical Monster Cerberus has been sighted in New York!
