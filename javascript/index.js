var age = prompt("Please enter your age");
if (age>18 && age<60){
    if(age>25 && age<60){
        console.log("Adult");
    }
    console.log("Major");
}
else if (age>60){
    console.log("Senior Citizen");
}
else{
    console.log("Minor");
}


var color = prompt("What's your favorite color?");
switch(color){
    case "green":
        console.log("Green is a good color");
        break;
    case "red":
        console.log("Red is a bold color");
        break;
    case "blue":
        console.log("Blue is a tranquil color");
        break;
    case "yellow":
        console.log("Yellow is a bright color");
        break;
    default:
        console.log("This is a good option too!");
    }


// Ask user to enter age, sex ( M or F ), marital status ( Y or N ) and then using following rules print their place of service.
// if employee is female, then she will work only in urban areas.
// if employee is a male and age is in between 20 to 40 then he may work in anywhere
// if employee is male and age is in between 40 to 60 then he will work in urban areas only.
// And any other input of age should print "ERROR".

var age = parseInt(prompt("Enter your age"));
var sex = prompt("Enter your gender. Enter M or F");
var maritalstatus = prompt("Are you married? Enter Y or N");
if (sex=='F'){
    console.log("Hi! You will work only in urban areas");
}
else if (sex=='M'){
    if(age>=20 && age<=40){
        console.log("Hi! You may work anywhere");
    }
    else if (age>=41 && age<=60){
        console.log("Hi! You will work in urban areas only");
    }
    else {
    console.log("ERROR");
}
}

var num = parseInt(prompt("Enter the range"));
var i;
while (i <= num){
    console.log(i);
    i++;
}


var num = parseInt(prompt("Enter the range"));
var i=1;
do{
    console.log(i);
    i++;
}
while(i<=num)

for (let i=1; i<=10;i++){
    console.log(i);
}

const str = ["Apple", "Banana", "Kiwi"];
for (let i in str){
    console.log(str[i]);
}

const num = {age:"34", status:"unemployed"}

for (let i in num){
    console.log(num[i]);
}

//  Write a program to display the cube of the number upto a given integer.
var range = parseInt(prompt("Enter the range or the integer"));
var i = 1;
while(i<=range){
    var result = i*i*i;
    console.log(result);
    i++;
}