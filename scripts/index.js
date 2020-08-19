'use strict';

const numberButtonNode = document.querySelectorAll('.number');
const operationButtonNode = document.querySelectorAll('.operator')
const equalButton = document.getElementById("result")

let inputArr = [];
const calcScreen = document.getElementById('input');

numberButtonNode.forEach(function (button){
    button.addEventListener('click', function(e){
        event.preventDefault();
        inputArr = [...inputArr, button.value]
        console.log(inputArr)
        if (calcScreen.value == 0){
            calcScreen.value = button.value
        }
        else {calcScreen.value += button.value}
    })
})
 operationButtonNode.forEach(function(button){
    button.addEventListener('click', function(e){
        event.preventDefault();
        inputArr = [...inputArr, button.value]
        console.log(inputArr)
        if (calcScreen.value == 0){
            calcScreen.value = button.value
        }
        else{calcScreen.value += button.value}
    })
 })


const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function(e){
    const calcScreen = document.getElementById('input')
    calcScreen.value = 0
    inputArr =[]
})

equalButton.addEventListener('click',function(e){
    let numbReg = /\d/;
    let firstNum = "";
    let secondNum = "";
    for (let char in inputArr){
        if (numbReg.test(inputArr[char]) || inputArr[char] == "."){
            firstNum += inputArr[char]
            console.log(firstNum)
        }
    }
});