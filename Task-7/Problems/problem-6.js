let numbers=[];

for(let i=0; i<5; i++){
    let randomNumber=Math.floor(Math.random()*100);
    numbers.push(randomNumber);
}

function findElements(){
    let firstElement=numbers[0];
    let lastElement=numbers[numbers.length-1];

    alert("Random Array: " + numbers);
    alert("First Element: " + firstElement);
    alert("Last Element: " + lastElement);
}

findElements();



