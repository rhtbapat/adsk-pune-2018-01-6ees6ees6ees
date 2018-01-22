class HoneyMakerBee extends Bee {
  constructor(){
    super();
    this.age = 10;
    this.job = 'make honey';
    this.color = super.getColor();
    this.food = super.getfood();
    this.honeyPot = 0;
  }
  eat(){
    super.eat();
  }

  makeHoney(){
    this.honeyPot += 1;
  }

  giveHoney(){
    this.honeyPot -= 1;
  }
};
