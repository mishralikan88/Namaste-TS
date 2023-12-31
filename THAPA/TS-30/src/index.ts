abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateArea(): number;
  abstract displayArea: () => void;
}

class Circle extends Shape {
  constructor(protected color: string, protected radius: number) {
    super(color);
  }
  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  public displayArea: () => void = () => {
    // () => void is method signature type
    console.log(`This is a ${this.color} cirlce with radius ${this.radius}`);
  };
}

const circle = new Circle("red", 5);
circle.calculateArea();
circle.displayArea();

// Do the same for triangle and rectangle and square.
