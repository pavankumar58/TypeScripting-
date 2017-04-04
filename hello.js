function greet(person) {
    return "Hello " + person;
}
var user = "ll";
var flag = true;
flag = false;
flag = true;
var arr = [1, 2, 3, "abc"];
var num = 100;
num = "lala";
console.log(greet(user));
console.log("lets find area of a circle and its circumference");
var constants;
(function (constants) {
    constants[constants["pi"] = 3.14] = "pi";
    constants[constants["e"] = 0.4] = "e";
    constants[constants["log2"] = 0.3] = "log2";
    constants[constants["log4"] = 0.7] = "log4";
    constants[constants["log7"] = 0.9] = "log7";
})(constants || (constants = {}));
var radius = 10;
console.log("Area");
console.log(constants.pi * radius * radius);
console.log("circumferences");
console.log(2 * constants.pi * radius);
function addnums(num1, num2) {
    if (typeof num1 == "string") {
        if (isNaN(parseInt(num1, 10))) {
            return 0;
        }
        num1 = parseInt(num1, 10);
    }
    return num1 + num2;
}
console.log(addnums('10', 20));
function areacircle(r1, r2) {
    if (r2 === void 0) { r2 = r1; }
    return constants.pi * r1 * r2;
}
console.log("area of circle is " + areacircle(3));
function perimeterrect(height1, height2, length) {
    if (length) {
        return Math.floor(2 * (height1 + height2));
    }
    return 2 * (height1 + height2);
}
console.log("perimeter of rect is " + perimeterrect(4.234, 4.3443, true));
function areasofQuad(side1, side2, side3, side4) {
    if (side2 === undefined && side3 === undefined && side4 === undefined) {
        side2 = side3 = side1;
        return side1 * side2;
    }
    else if (side3 === undefined && side4 === undefined) {
        side3 = side1;
        side4 = side2;
        return side1 * side2;
    }
    return side1 + side2 + side3 + side4;
}
var a = areasofQuad(1);
var b = areasofQuad(1, 2);
var c = areasofQuad(1, 2, 3, 4);
console.log("areas of square is  " + a + " area of rectangle is " + b + " area of tripezium is " + c);
function operate(x) {
    return x.side * x.side;
}
var calc = operate({ shape: "square", side: 5 });
console.log(calc);
//classes
var website = (function () {
    function website(url, fblikes) {
        this.url = url;
        this.facebooklikes = fblikes;
    }
    //methods
    website.prototype.likesgoogle = function () {
        return (this.facebooklikes / 1000) + 'k';
    };
    return website;
}());
var google = new website("http://google.com", 12344);
console.log(google.likesgoogle());
var objs = (function () {
    function objs() {
        // constructor(l1:number,l2:number){
        //     this.l1 = l1;
        //     this.l2 = l2;
        // }
        // get area(){
        //     return this.l1 * this.l2;
        // }
        this.area = this.l1 * this.l2;
    }
    return objs;
}());
var objrect = new objs(10, 20);
console.log(objrect.area);
var Animal = (function () {
    function Animal(name) {
        this._name = '[Animal]';
        this.name = name;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.sayName = function () {
        console.log('My name is ${this.name}');
    };
    return Animal;
}());
