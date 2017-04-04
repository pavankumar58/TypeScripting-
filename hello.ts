function greet(person: string) {
    return "Hello " + person;
}

var user = "ll";
var flag:boolean = true;
flag = false;
flag = true;
var arr:any[] = [1,2,3,"abc"];

var num:any = 100;
num = "lala";
console.log(greet(user));
console.log("lets find area of a circle and its circumference");

enum constants {
    pi = 3.14,
    e = 0.4,
    log2 = 0.3,
    log4 = 0.7,
    log7 = 0.9
}
var radius:number = 10;
console.log("Area");
console.log(constants.pi * radius * radius);
console.log("circumferences");
console.log(2 * constants.pi * radius)

function addnums(num1:any ,num2:number):number{
   if(typeof num1 == "string"){
       if(isNaN(parseInt(num1,10))){
           return 0;
       }
       num1 = parseInt(num1 , 10);
   }
    return num1+num2;
}
console.log(addnums('10',20));

function areacircle(r1:number,r2:number=r1){
    return constants.pi * r1 *r2;
}
console.log("area of circle is "+ areacircle(3));

function perimeterrect(height1:number,height2:number, length?:boolean):number{
  
    if(length){
        return Math.floor(2*(height1 + height2));
    }
    return 2*(height1 + height2);
}
console.log( "perimeter of rect is " + perimeterrect(4.234,4.3443,true));

//function overloading

function areasofQuad(side1:number);
function areasofQuad(side1:number, side2:number);
function areasofQuad(side1:number, side2:number,side3:number,side4:number);
function areasofQuad(side1:number, side2?:number,side3?:number,side4?:number){
    if(side2 === undefined && side3 === undefined && side4 === undefined){
        side2 = side3 = side1;
        return side1 * side2;
    }
    else if(side3 === undefined && side4 === undefined){
        side3 = side1;
        side4 = side2;
        return side1 * side2;
    }
    return side1 + side2 + side3 + side4;
}
var a:number =areasofQuad(1);
var b:number =areasofQuad(1,2);
var c:number=areasofQuad(1,2,3,4);
console.log("areas of square is  " + a + " area of rectangle is " + b + " area of tripezium is " + c);

// interfaces


interface operareInterface{
    shape:string;
    side?:number;
}
function operate(x:operareInterface){
    return x.side * x.side;
}
var calc = operate({shape:"square",side:5});
console.log(calc);

//classes

class website {
    url: string;
    facebooklikes:number;
    constructor (url:string, fblikes:number){
        this.url = url;
        this.facebooklikes = fblikes;
    }

    //methods

    likesgoogle():string{
        return (this.facebooklikes/1000)+ 'k';
    }
}
var google = new website("http://google.com", 12344);
console.log(google.likesgoogle());

class objs {
    l1:number;
    l2:number;

    // constructor(l1:number,l2:number){
    //     this.l1 = l1;
    //     this.l2 = l2;
    // }
    // get area(){
    //     return this.l1 * this.l2;
    // }
    area = this.l1 * this.l2;
}

var objrect = new objs(10,20);
console.log(objrect.area);

//typescript another tutorial

interface IAnimal {
    name: string;
    sayName() : void;
}

class Animal implements IAnimal {
    private _name : string = '[Animal]';
    get name(): string{
        return this._name;
    }
    set name(name:string){
        this._name = name;
    }
    constructor(name:string){
        this.name=name;
    }
    sayName() {
        console.log('My name is ${this.name}');
    }
}