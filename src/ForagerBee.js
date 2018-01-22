class ForagerBee extends Bee{
  constructor(){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.color = super.getColor();
    this.food = super.getfood();
    this.canFly = true;
    this.treasureChest = [];
  }

  eat(){
    super.eat();
  }

  forage(treasure){
    this.treasureChest.push(treasure);
  }

  getTreasureChest(){
    return this.treasureChest;
  }
};
