console.log('Ready to go');

var myFname = 'Bill'; // string
var toes = 10; // number
var codes = true; // boolean
var interests = ['food', 10, false]; // array
// object
var moreInfo = {
    color: 'red',
    cars: 1,
    interest: ['cheese', 'ham']
};

// function that returns something to do with later on
function topSpeed(){
    return 75;
}
console.log(topSpeed() * 2);

// functions can accept arguments that are then used as variables inside the func
function addTen(numberOne){
    return numberOne + 10;
}
// invoking addTen, with a value for the numberOne argument
console.log(addTen(100));

// function that does something immediately
function updateHeading(randomString){
    document.getElementById('head').innerText = randomString;
}
updateHeading('cheese');

function fullName(fName, spacer, lName){
    // function body.
    // use native JS to get the DOM (document)
    // then get An element from that DOM, by it's ID
    // then update it's innerText
    document.getElementById('full-name').innerText = fName + spacer + lName;
}
fullName('Bill', ' - ', 'Keller');

// Anon func stored in a variable
var myGreatFunction = function(){
    return 'Steve';
};
document.getElementById('friends-name').innerText = myGreatFunction();

// write your own functions!
function firstName(fName){
    return fName;
}

document.getElementById('new-name').innerText = firstName('Apurva');

// Conduct tests using if statements
if (5 > 2) {
    // we will end up here if test is true
    console.log('we end up here, because 5 > 2');
}

if (topSpeed() > 100) {
    console.log('We will NOT end up here, because topSpeed returns num 75');
} else {
    // we WILL end up here
    console.log('if statement returned false, so we ended up hered, in the else');
}

// write JS that checks if a variable is less than 10.
// if it is, alert('your var is less than 10')
// if it is not, alert() what the variable was, and that it was greater than 10
var foo = 800;
if (foo < 10) {
    console.log('your var is less than 10');
} else {
    // es6 introduces 'templates'
    console.log(`you entered ${foo} and it is GT than 10`);
}

// do the same thing, but with strings
var bar = 'bill';
if (bar === 'steve') {
    // you will NOT end up here
} else {
    // if statement returns false, so you end up here
}

var cheese = 'swiss';
if (cheese === 'cheddar') {
    // you won't end up here
} else if (cheese === 'swiss') {
    // you WILL end up here
} else {
    // you will not end up here either.
}

// accessing items in an array, using their index #
var cartoons = ['snoopy', 'garfield', 'popeye'];
console.log(cartoons[1]); // logs 'garfield' to the console

if (cartoons[1] === 'garfield') {
    // you will end up here
}

// find an items index # in an array
console.log(cartoons.indexOf('popeye')); // logs num 2

if (cartoons.indexOf('popeye') === 2) {
    // you will end up here
}

var beers = ['Lagunitas', 'miller', 'coors', 'bud', 'drink'];
var beersHtml = '';
// for loop. initilization, test, increment
for (var i = 0; i < beers.length; i++) {
    // each item
    console.log(beers[i]);
    beersHtml = beersHtml + '<li>' + beers[i] + '</li>';
    console.log(beersHtml);
}
document.getElementById('js-beers').innerHTML = beersHtml;

// while loop
var x = 6;
while (x < 10) {
    console.log(x);
    x++;
}

var myFriends = ['steve', 'Shirley', 'Marvin', 'Madelyn', 'Horace'];
for (var i = 0; i < myFriends.length; i++) {
    console.log('I am friends with ' + myFriends[i]);
}

// getElementById, returns null or one object
var heading = document.getElementById('title'); 
console.log(heading.innerText);
var name = 'Steve';
heading.innerText = 'Welcome ' + name; 

// getElementsByClassName and getElementsByTagName return arrays
var secondHeader = document.getElementsByClassName('heading')[1];
secondHeader.innerText = 'I selected YOU and updated your text';

// add elements to your DOM.
// select them using different selectors
// change them and update your DOM

// returns first p.js-copy as object
var firstPara = document.querySelector('.js-copy');
firstPara.innerHTML = '<span style="color: red;">I replaced you</span>'
// returns all p.js-copy's as an array
var allPara = document.querySelectorAll('.js-copy');
allPara[1].innerText = 'Second para, I replaced you too'













