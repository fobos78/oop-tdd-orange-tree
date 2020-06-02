class OrangeTree {
  age
  height
  constructor(age = 0, height = 0) {
    this.age = age;
    this.height = height;
  }

  passGrowingSeason() {
    this.age += 1;
    this.height += 2.5;
    if (this.age > 5 && this.age < 100) return true; else return false;
  }

  isMature() {
    
    //  Returns true if the tree is old enough to bear fruit, false otherwise
  }

  hasOranges() {
    //  Returns true if there are any oranges on the tree, false otherwise
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    //  orange-picking logic goes here
  }
}

