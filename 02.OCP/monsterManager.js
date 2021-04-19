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

      monster.rampage(location);
    }, this);
  },
};
module.exports = MonsterManager;
