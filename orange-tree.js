class OrangeTree {
  age
  height
  constructor(age = 0, height = 0) {
    this.age = age;
    this.height = height;
    this.array = [];
    this.flag = false; //проверяем собрали ли урожай в этом сезоне
  }

  passGrowingSeason() {
    this.age += 1;
    this.flag = true;
    if (this.height !== 25) this.height += 2.5;
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
    if (this.isMature() && flag) return true;
    return false;
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    let countOfOrange = Math.floor(Math.random() * 200 + 100)
    for (let i = 0; i < countOfOrange; i++) {
      this.array.push(new Orange)
    }
    this.flag = false;
    //  orange-picking logic goes here
    return this.array;
  }
}


