// ES6 classes support Super, constructor, get, set and static methods. Inheritance is achieved with the extends keyword

// class declaration
class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  getColor() {
    return this.color;
  }

  setColor(c) {
    this.color = c;
  }

  getDimensions() {
    return `height: ${this.height}, width: ${this.width}`
  }

  static area(rectangle) {
    return rectangle.width * rectangle.height
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width)
  }
}

const s = new Square(10);
console.log(s.width); // - 10
console.log(s.dimensions); // - "height: 10, width: 10"
console.log(Rectangle.area(s)); // - 100
