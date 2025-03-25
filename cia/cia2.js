class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Instantiate an object of Rectangle
const myRectangle = new Rectangle(5, 10);

// Display the results
console.log("Area:", myRectangle.calculateArea());
console.log("Perimeter:", myRectangle.calculatePerimeter());