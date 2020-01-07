//Ex9
function secondmaxmin() {
    var arr = prompt("Enter your array of numbers").split(",");
    arr.sort((a, b) => a - b);
    console.log(arr);
    alert("Your second lowest number is " + arr[1] + " and your second greatest number is " + arr[arr.length - 2]);
}

//Ex8
function isPrime() {
    var a = prompt("Enter your number you would like to check");
    if (a <= 1) {
        return alert("Incorrect, " + a + " is not a prime number");
    }
    for (i = 2; i <= a / 2; i++) {
        if (a % i == 0) {
            return alert("Incorrect, " + a + " is not a prime number");
        } else return alert("Correct, " + a + " is a prime number");
    }
}

//Ex7
function reverse() {
    var a = prompt('Enter the number you would like to reverse').split('');
    var b = "";
    for (var i = a.length - 1; i > -1; i--) {
        b += a[i];
    }
    alert("The reversed number is " + b);
}

//Ex6
function sad() {
    alert("Kho qua, em khong tu lam duoc, em cung khong muon copy code :(")
}

//Ex4
function largest() {
    var arr = prompt('Enter five numbers').split(',');
    console.log('Array: ' + arr);
    var max = arr[0];
    for (i = 1; i < 5; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return alert('Largest number is ' + max);
}

//Ex3
function random() {
    var a = Math.floor(Math.random() * 10) + 1;
    var b = prompt('Guess the number');
    var guess = (a == b) ? 'Good work!' : 'Not matched, the random number was ' + a;
    alert(guess);
}

//Ex2
function ctof() {
    var a = prompt('Enter Celsius: ');
    var celsius = a;
    var fahrenheit = (celsius * 9) / 5 + 32;
    alert('Fahrenheit: ' + fahrenheit);
}

function ftoc() {
    var a = prompt('Enter Fahrenheit: ');
    var fahrenheit = a;
    var celsius = ((fahrenheit - 32) / 9) * 5;
    alert('Celsius: ' + celsius);
}

//Ex1
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);