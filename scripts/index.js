'use strict';

const numberButtonNode = document.querySelectorAll('.number');
const operationButtonNode = document.querySelectorAll('.operator')
const equalButton = document.getElementById("result")
const deleteButton = document.getElementById("delete")

let inputArr = [];
const calcScreen = document.getElementById('input');
let numbReg = /\d/;
let equalPressed = false;
let characterReg = /\D/
let operatorArr = ["multi","div","add","sub"]

function Calculator(){}

Calculator.prototype.add = (num1, num2)=> {return num1 + num2}
Calculator.prototype.sub = (num1, num2) => {return num1 - num2}
Calculator.prototype.multi = (num1, num2) => {return num1 * num2}
Calculator.prototype.div = (num1, num2)=> {return num1 / num2}

let calc = new Calculator()

numberButtonNode.forEach(function (button){
    button.addEventListener('click', function(e){
        event.preventDefault();
        inputArr = [...inputArr, button.value]
        if (calcScreen.value == 0 || inputArr.length === 0){
            calcScreen.value = button.value
            //equalPressed = false
        }
        else {calcScreen.value += button.value}
    })
})
 operationButtonNode.forEach(function(button){
    button.addEventListener('click', function(e){
        event.preventDefault();
        if (calcScreen.value == 0){
            calcScreen.value = 0
        }
        else if (characterReg.test(inputArr[inputArr.length-1])){
            inputArr = [...inputArr]
        }
        else{
            calcScreen.value += button.value
            inputArr = [...inputArr, button.value]}
        console.log(inputArr)
        })
 })

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function(e){
    calcScreen.value = 0
    inputArr =[]
})
let newString = ""

deleteButton.addEventListener('click', (e) => {
    inputArr.splice(inputArr.length-1,1)
    newString = calcScreen.value.slice(0,calcScreen.value.length-1)
    calcScreen.value = newString
    console.log(inputArr)
})

equalButton.addEventListener('click',function(e){
    let firstNum = "";
    let operationArr = [];
    for (let char in inputArr){
        if (numbReg.test(inputArr[char]) || inputArr[char] == "."){
            firstNum += inputArr[char]
        }
        else {
            operationArr = [...operationArr, Number(firstNum), inputArr[char]]
            firstNum = []
        }
    }
    operationArr = [...operationArr, Number(firstNum)]
    let i = 0;
    `for (let oper in operatorArr){
        while (operationArr.indexOf(oper) !== -1){
            i = operationArr.indexOf(oper)
            operation.Arr.splice(i -1, 3, calc[oper])
        }
    }`
    while (operationArr.indexOf("*") !== -1){
        i = operationArr.indexOf("*")
        operationArr.splice(i-1,3, operationArr[i-1] * operationArr[i+1]);
    }

    while (operationArr.indexOf("/") !== -1){
        i = operationArr.indexOf("/")
        operationArr.splice(i-1,3, operationArr[i-1] / operationArr[i+1]);
    }

    while (operationArr.indexOf("+") !== -1){
        i = operationArr.indexOf("+")
        operationArr.splice(i-1,3, operationArr[i-1] + operationArr[i+1]);
    }

    while (operationArr.indexOf("-") !== -1){
        i = operationArr.indexOf("-")
        operationArr.splice(i-1,3, operationArr[i-1] - operationArr[i+1]);
    }
    //equalPressed = true;
    inputArr =[]
    for (let chars of String(operationArr[0])){
        inputArr = [...inputArr, chars]
    }
    console.log(inputArr)
    //inputArr = [operationArr]
 
    calcScreen.value = operationArr
});