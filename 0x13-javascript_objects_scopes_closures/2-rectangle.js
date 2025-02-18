#!/usr/bin/node
// Write a class Rectangle that defines a rectangle:

// You must use the class notation for defining your class
// The constructor must take 2 arguments w and h
// Initialize the instance attribute width with the value of w
// Initialize the instance attribute height with the value of h
// If w or h is equal to 0 or not a positive integer, create an empty object

class Rectangle {
  constructor(w, h){
    if(w<=0 || h<=0 || !Number.isInteger(w) || !Number.isInteger(h)){
      return {}; 
    }
    this.width = w;
    this.height = h;
  }
}
const rect2 = new Rectangle(3, 5);
console.log(rect2)