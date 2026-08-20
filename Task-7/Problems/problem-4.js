let name=prompt("Enter your name in lowercase:");

let firstLetter=name.charAt(0);
let capitalLetter=firstLetter.toUpperCase();
let remainingLetters=name.slice(1);

let finalName=capitalLetter + remainingLetters;

alert(finalName);


