// Monster Types and Manager
var MonsterManager = {
  init: function (monsters, locations) {
    this.monsters = monsters;
    this.locations = locations;
  },

  getRandomLocation: function () {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    return this.locations[getRandomInt(this.locations.length)];
  },

  rampageAll: function () {
    this.monsters.forEach(function (monster) {
      var location = this.getRandomLocation();

      if (Object.getPrototypeOf(monster) == Kaiju) {
        console.log(
          "The " +
            monster.type +
            " " +
            monster.name +
            " is rampaging through " +
            location +
            "!"
        );
      } else if (Object.getPrototypeOf(monster) == GreatOldOne) {
        console.log(
          "The " +
            monster.type +
            " " +
            monster.name +
            " has awaken from its slumber in " +
            location +
            "!"
        );
      }
    }, this);
  },
};

// monster prototypes
var Kaiju = {
  init: function (name) {
    this.name = name;
    this.type = "Kaiju";

    return this;
  },
};

var GreatOldOne = {
  init: function (name) {
    this.name = name;
    this.type = "Great Old One";

    return this;
  },
};

// Rampage!
var monsters = [];
var locations = ["Athens", "Budapest", "New York", "Santiago", "Tokyo"];

var rodan = Object.create(Kaiju).init("Rodan");
monsters.push(rodan);

var gzxtyos = Object.create(GreatOldOne).init("Gzxtyos");
monsters.push(gzxtyos);

var myMonsterManager = Object.create(MonsterManager);
myMonsterManager.init(monsters, locations);

myMonsterManager.rampageAll();
// Logs: (with variable city names)
// The Kaiju Rodan is rampaging through Santiago!
// The Great Old One Gzxtyos has awaken from its slumber in Athens!
