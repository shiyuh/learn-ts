class Vehicle {
  // equivalent to declaring a field outside and intializing within the constuctor
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }
}

class Motor extends Vehicle {
  // notice no 'public' on color, as we don't want to redeclare field in Motor
  constructor(public wheels: number, color: string) { 
    super(color);
  }

  private drive(): void {
    console.log('vrooooom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const motor = new Motor(4, 'orange');
motor.startDrivingProcess();