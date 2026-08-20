/*

// Variables

console.log("Malik Sanaullah");

name="Sanaullah";
console.log(name);

age=20;
console.log(age);

x=null;
console.log(x);

y=undefined;
console.log(y);

isokay=false;
console.log(isokay);
*/



/*
// ---------------Constant Variable-----------

const student = {
    fullName: "Sanaullah Malik",
    age: 20,
    cgpa: 3.0,
    isPass: true
};

console.log(student);

student["age"]=21;
*/




// ---------Comments------------------

// Single line comment

/*
    Multi line comment
*/




/*
// --------------Operators------------


// -----Arithmetic-------------

let a=5;
let b=2;

console.log("a=",a ,"& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);


// -----Uniray-------

let c=10
let d=5

// PreIncrement
console.log("++c=",++a);
console.log("--d=",--a);
// PostIncrement
console.log("d++=",a);
console.log("c--=",a--);


// --------Assignment------------

let e=8;
let f=4;

console.log("e=",e);
console.log("f=",f);

console.log("e+=1",e);
console.log("f-=1",f);
console.log("e*=2",e);
console.log("f/=2",f);

// ---------Comparison---------

let aa=4;
let bb=8;
let cc="48";

console.log("4==8",aa==bb);
console.log("4!=8",aa!=bb);
console.log("4==='48'",aa===cc);
console.log("4!=='48'",aa!==cc);
console.log("4===8",aa===bb);
console.log("4>=8",aa>=bb);
console.log("4<=8",aa<=bb);
console.log("4!=8",aa!=bb);
console.log("4>8",aa>bb);


// --------Logical--------------


let cond1= 8==4;
let cond2= 8>4;

console.log("cond1&&cond2", cond1&&cond2);
console.log("cond1||cond2", cond1||cond2);
console.log("!cond1", !cond1);
console.log("!cond2", !cond2);
*/




/*
// -------------------Conditional Statements----------


let age=20;

if(age>=18){
    console.log("You Can Vote");
}

if(age<18){
    console.log("You can not vote");
}

let mode="dark";
let color;

if(mode==="dark"){
    color="black";
}
else{
    color="white";
}

console.log(color);


// odd or even
// if else
let num=10;

if(num%2===0){
    console.log(num, " is even number");
}
else{
    console.log(num, " is odd number")
}


// elif
let point=4;

if(point==0){
    console.log("You Should Restart the game")
}else if(point<5&&point>0){
    console.log("You Can Improve next time");
}else{
    console.log("You are brilliant");
}


// ternary operator

let result = age>=18?"adult" : "not adult";

console.log(result);
*/





// ---------------Practice Problems-----------------
/*
alert("hello"); //one time pop up

let name=prompt("Hello");

console.log(name);
*/


/*
// ---------Problem(1)-----------
// Get user to input number using prompt("Enter a number")
// Check if the number is multiple of 5 or nor

let num=prompt("Enter a number:");

if(num%5==0){
    console.log(num, "is a multiple of 5");
}else{
    console.log(num, "is not a multiple of 5");
}
*/




/*
// ------------Problem(2)-----------------
// Write a code which can give grade to  
// students according to their score

let score=prompt("Enter the score");
let grade;

if(score>=80){
    grade="A";
}else if(score<80 && score>=70){
    grade="B";
}else if(score<70 && score>=60){
    grade="C";
}else if(score<60 && score>=50){
    grade="D";
}else{
    grade="F";
}

console.log(grade);
*/






// ------------------Loops-----------------

/*
// For Loop
for(let i=1; i<=5; i++){
    console.log("This is For loop")
}


// calc sum of 5 num

let sum=0;
for(let i=0; i<=5; i++;){
    sum+=i;
}

console.log(sum);
*/

/*
// While Loop
let i=1;

while(i<=10){
    console.log("Sanaullah");
    i++;
}
*/

/*
// Do-While Loop
let i=5;
do{
    console.log("Sanaullah");
    i++;
}while(i<=10);
*/

/*
// For-of Loop

let str="Sanaullah";

for(let i of str){
    console.log(i);
}
*/

/*
// For-in Loop
let student={
    name: "Sanaullah",
    age: 20,
    cgpa: 3.0,
    isPass: true
};

for(let i in student){
    console.log(i, "key=,", student[i]);
}
*/





// ------------------Strings-----------------------------

let str="Sanaullah"

str.length

str[0]















