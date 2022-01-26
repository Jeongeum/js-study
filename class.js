"use strict";

// class : 템플릿
// object : 템플릿을 이용해서 실제로 데이터를 넣어 만드는것

// class 선언

class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello~`);
  }
}

const ellie = new Person("ellie", 24); // 인스턴스 생성 (object)
console.log(ellie);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//게터 세터

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("steve", "job", -10);
console.log(user1.age);

//fields (public, private)

class Experiment {
  publicField = 2;
  #privaterField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privaterField);

//static

// 상속

// 부모 class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 오버라이딩 해도 부모 class 메소드 호출 가능
    console.log(`📐`);
  }

  // 오버라이딩(다형성)
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, `blue`);
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, `red`);
triangle.draw();
console.log(triangle.getArea());
