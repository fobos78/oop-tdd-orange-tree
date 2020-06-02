class OrangeTree {
  age
  height
  constructor(age = 0, height = 0) {
    this.age = age;
    this.height = height;
    this.array = [];

  }

  passGrowingSeason() {
    this.age += 1;
    if (this.height !== 25) this.height += 2.5;
    this.array.length = 0;
    let countOfOrange = Math.floor(Math.random() * 200 + 100)
    for (let i = 0; i < countOfOrange; i++) {
      this.array.push(new Orange())
    }
  }

  isDead() {
    if (this.age < 100) return true;
    return false;
  }

  isMature() { // проверяет на возраст
    if (this.age > 5 && this.age < 100) return true;
    return false;
    //  Returns true if the tree is old enough to bear fruit, false otherwise
  }

  hasOranges() {
    if (this.array.length > 0) return true;
    return false;
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    return this.array.pop()
    //  orange-picking logic goes here
  }
}


