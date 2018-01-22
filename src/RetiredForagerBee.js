class RetiredForagerBee extends ForagerBee{
  constructor(){
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.food = super.getfood();
    this.treasureChest = super.getTreasureChest()
  }

  forage(){
    return 'I am too old, let me play cards instead';
  }

  eat(){
    super.eat();
  }

  gamble(treasure){
    this.treasureChest.push(treasure);
  }
};
