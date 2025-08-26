
// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.

document.write("<h3>1. Function without argument and no return type</h3>");
function greeting(message){
    if(message){
        console.log(message);
        document.write(message);
    }else{
        console.log("Good Morning");
        document.write("Good Morning");
    }

}
greeting();

// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.

document.write("<h3>2. Function with argument and return type</h3>");
function circleArea(r){
    let pi = 3.14;
    let area = pi * r * r;
    return area;
}
document.write("Area of Circle :- " + circleArea(5));
console.log("Area of Circle :- " + circleArea(5));

// 3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.

document.write("<h3>3. Function with argument and return type</h3>");
function triangleArea(l, h){
    let area = (l * h) / 2;
    return area;
}
document.write("Area of Triangle :- " + triangleArea(5, 10));
console.log("Area of Triangle :- " + triangleArea(5, 10));

// 4. Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.

document.write("<h3>4. Function with argument and return type</h3>");
function rectangleArea(l, h){
    let area = l * h;
    return area;
}
document.write("Area of Rectangle :- " + rectangleArea(5, 10));
console.log("Area of Rectangle :- " + rectangleArea(5, 10));

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

document.write("<h3>5. Function with argument and return type</h3>");
function findValue(a, b, c){
    let result = ((b * b) - (4 * a * c)) / (2 * a);
    return result;
}
document.write("Result :- " + findValue(1, 5, 6));
console.log("Result :- " + findValue(1, 5, 6));

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function

document.write("<h3>6. Function with argument and return type</h3>");
function value(a, b){
    let result = (a * a) + (2 * a * b) + (b * b);
    return result;
}
document.write("Result :- " + value(5, 10));
console.log("Result :- " + value(5, 10));

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function

document.write("<h3>7. Function with argument and return type</h3>");
function celsius(f){
    let c = (f - 32) / 1.8;
    return c;
}
document.write("Temperature in Celsius :- " + celsius(100));
console.log("Temperature in Celsius :- " + celsius(100));

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function

document.write("<h3>8. Function with argument and return type</h3>");
function fahrenheit(c){
    let f = (c * 1.8) + 32;
    return f;
}
document.write("Temperature in Fahrenheit :- " + fahrenheit(37));
console.log("Temperature in Fahrenheit :- " + fahrenheit(37));

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.

document.write("<h3>9. Function with argument and no return type</h3>");
function checkOddEven(num){
    if(num % 2 === 0){
        document.write(num + " is Even");
        console.log(num + " is Even");
    }else{
        document.write(num + " is Odd");
        console.log(num + " is Odd");
    }
}
checkOddEven(5);

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type

document.write("<h3>10. Function with argument and no return type</h3>");
function swapValues(a, b){
    document.write("Before Swapping: a = " + a + ", b = " + b + "<br>");
    console.log("Before Swapping: a = " + a + ", b = " + b);
    a = a + b;
    b = a - b;
    a = a - b;
    document.write("After Swapping: a = " + a + ", b = " + b);
    console.log("After Swapping: a = " + a + ", b = " + b);
}
swapValues(5, 10);