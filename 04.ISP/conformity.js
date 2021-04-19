// game
class gameObject {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    //
    console.log(`a ${this.name} moved`);
  },
};
const attacker = {
  attack(target) {
    //
    console.log(
      `${this.name} attacked ${target.name} for ${this.attackDamage}`
    );
    target.takeDamage(this.attackDamage);
  },
};
const hasHealth = {
  takeDamage(amount) {
    //
    this.health -= amount;
    console.log(`${this.name} has ${this.health} remaining health`);
  },
};

class Character extends gameObject {
  constructor(name, health, attackDamage) {
    super(name);
    this.health = health;
    this.attackDamage = attackDamage;
  }
}

class Wall extends gameObject {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}
class Turret extends gameObject {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, hasHealth);

Object.assign(Wall.prototype, hasHealth);

Object.assign(Turret.prototype, attacker);

const turret = new Turret("turret", 10);
const character = new Character("character", 30, 100);
const wall = new Wall("wall", 40);

turret.attack(character);
character.move();
character.attack(wall);
