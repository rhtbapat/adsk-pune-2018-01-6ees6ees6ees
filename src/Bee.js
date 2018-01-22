class Bee extends Grub{
  constructor ()
  {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.food = super.getfood();
    this.job = 'Keep on growing';
  }
  eat(){
    super.eat();
  }

  getColor(){
    return this.color;
  }
};
