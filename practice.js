class Person{
    constructor(name, age, school){
        this.name = name;
        this.age = age;
        this.school = school
    }
}

// classes we have instance properties: what they have
// names, age, height
// instance methods is what they do (jump, talk, walk)
// class have constructor used to set up an object

class Rectangle {
    constructor(width, height, color){
        //console.log("a rectangle is being created")
        this.width = width;
        this.height = height;
        this.color = color;
    }

    GetArea(){
        return this.width * this.height;
    }
}

let rectangle1 = new Rectangle(5, 9, "blue")
let rectangle2 = new Rectangle(10, 4, "green")
console.log(rectangle1)
console.log(rectangle1.GetArea())
console.log(rectangle2.GetArea())
//let rectangle2 = new Rectangle()
