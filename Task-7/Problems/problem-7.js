let firstNumber=document.getElementById("firstNumber");
let secondNumber=document.getElementById("secondNumber");
let result=document.getElementById("result");

firstNumber.addEventListener("input", addNumbers);
secondNumber.addEventListener("input", addNumbers);

function addNumbers(){
    let number1=parseInt(firstNumber.value);
    let number2=parseInt(secondNumber.value);
    let addition=number1+number2;

    result.value=addition;
}



