'use strict';

const numberButtonNode = document.querySelectorAll('.number');
const operationButtonNode = document.querySelectorAll('.operator')
const equalButton = document.getElementById("result")

let inputArr = [];
const calcScreen = document.getElementById('input');
let numbReg = /\d/;
let equalPressed = false;
let characterReg = /\D/
let operatorArr = ["+","/","+","-"]

numberButtonNode.forEach(function (button){
    button.addEventListener('click', function(e){
        event.preventDefault();
        inputArr = [...inputArr, button.value]
        console.log(inputArr)
        if (calcScreen.value == 0 || equalPressed){
            calcScreen.value = button.value
            equalPressed = false
        }
        else {calcScreen.value += button.value}
    })
})
 operationButtonNode.forEach(function(button){
    button.addEventListener('click', function(e){
        event.preventDefault();
        //inputArr = [...inputArr, button.value]
        console.log(inputArr)
        //removed charreg
        if (calcScreen.value == 0){
            calcScreen.value = 0
        }
        else if (characterReg.test(inputArr[inputArr.length-1])){
            inputArr = [...inputArr]
        }
        else{
            calcScreen.value += button.value
            inputArr = [...inputArr, button.value]}
    })
 })


const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function(e){
    const calcScreen = document.getElementById('input')
    calcScreen.value = 0
    inputArr =[]
})

equalButton.addEventListener('click',function(e){
    let firstNum = "";
    let operationArr = [];
    for (let char in inputArr){
        if (numbReg.test(inputArr[char]) || inputArr[char] == "."){
            firstNum += inputArr[char]
            console.log(firstNum)
        }
        else {
            operationArr = [...operationArr, Number(firstNum), inputArr[char]]
            console.log(operationArr)
            firstNum = []
        }
    }
    operationArr = [...operationArr, Number(firstNum)]

    let i = 0;

    //console.log('happened1')
    //for (let oper in operatorArr)
    while (operationArr.indexOf("*") !== -1){
        i = operationArr.indexOf("*")
        operationArr.splice(i-1,3, operationArr[i-1] * operationArr[i+1]);
        console.log('happened2')
        console.log(operationArr)
    }

    while (operationArr.indexOf("/") !== -1){
        i = operationArr.indexOf("/")
        operationArr.splice(i-1,3, operationArr[i-1] / operationArr[i+1]);
        console.log('happened2')
        console.log(operationArr)
    }

    while (operationArr.indexOf("+") !== -1){
        i = operationArr.indexOf("+")
        operationArr.splice(i-1,3, operationArr[i-1] + operationArr[i+1]);
        console.log('happened2')
        console.log(operationArr)
    }

    while (operationArr.indexOf("-") !== -1){
        i = operationArr.indexOf("-")
        operationArr.splice(i-1,3, operationArr[i-1] - operationArr[i+1]);
        console.log('happened2')
        console.log(operationArr)
    }
    equalPressed = true;
    inputArr = []

        
    calcScreen.value = operationArr
});