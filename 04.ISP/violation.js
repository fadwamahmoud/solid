// game
class gameObject {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  move() {
    //
    console.log(`a ${this.name} moved`);
  }
  attack(target) {
    //
    console.log(
      `${this.name} attacked ${target.name} for ${this.attackDamage}`
    );
    target.takeDamage(this.attackDamage);
  }
  takeDamage(amount) {
    //
    this.health -= amount;
    console.log(`${this.name} has ${this.health} remaining health`);
  }
}

class Character extends gameObject {
  // move
}

class Wall extends gameObject {
  constructor(name, health) {
    super(name, 0, health);
  }
  move() {
    return null;
  }
  attack() {
    return null;
  }
}

class Turret extends gameObject {
  constructor(name, attackDamage, health) {
    super(name, attackDamage, null);
  }
  move() {
    return null;
  }
  takeDamage() {
    return null;
  }
}

const turret = new Turret("turret", 10);
const character = new Character("character", 30, 100);
const wall = new Wall("wall", 40);

turret.attack(character);
character.move();
character.attack(wall);
wall.move();
