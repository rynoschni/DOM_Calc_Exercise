'use strict';

const numberButtonNode = document.querySelectorAll('.number');
const operationButtonNode = document.querySelectorAll('.operator');
const equalButton = document.getElementById("result");
const deleteButton = document.getElementById("delete");
const calcScreen = document.getElementById('input');
const clearButton = document.getElementById('clear')
const memoryAddButton= document.getElementById('memory')
const memoryReturnButton = document.getElementById('callMem')
const memoryRmButton = document.getElementById('mRemove')


let inputArr = [];
let numbReg = /\d/;
let characterReg = /\D/
let operatorArr = ["multi","div","add","sub"]
let memoryVal = [];

function Calculator(){}

Calculator.prototype.add = (num1, num2)=> {return num1 + num2}
Calculator.prototype.sub = (num1, num2) => {return num1 - num2}
Calculator.prototype.multi = (num1, num2) => {return num1 * num2}
Calculator.prototype.div = (num1, num2)=> {return num1 / num2}

let calc = new Calculator()

numberButtonNode.forEach(function (button){
    button.addEventListener('click', function(e){
        event.preventDefault();
        if (inputArr.length === 0){
            calcScreen.value = button.value
            //inputArr = [...inputArr, button.value]
        }
        else {calcScreen.value += button.value}
        inputArr = [...inputArr, button.value]
    })
})
 operationButtonNode.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        event.preventDefault();
        if (inputArr.length == 0){
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

clearButton.addEventListener('click', (e)=>{
    calcScreen.value = 0
    inputArr =[]
})

deleteButton.addEventListener('click', (e) => {
    let newString = ""
    inputArr.splice(inputArr.length-1,1)
    newString = calcScreen.value.slice(0,calcScreen.value.length-1)
    calcScreen.value = newString
    if (inputArr.length === 0){
        calcScreen.value = 0
    }
})

memoryAddButton.addEventListener('click', (e) =>{
    if(numbReg.test(inputArr[inputArr.length-1])){
        memoryVal = [...inputArr]
    }
});

memoryRmButton.addEventListener('click', (e)=>{
    if(memoryVal.length !== 0){
        memoryVal = []
    }
})

memoryReturnButton.addEventListener('click', (e) =>{
    if(memoryVal.length !== 0 && characterReg.test(inputArr[inputArr.length-1]) ){
        console.log(characterReg.test(inputArr.length-1))
        inputArr=[...inputArr, ...memoryVal]
        for (let mem of memoryVal){
            calcScreen.value += mem
        }
    }
})

let newString = ""


equalButton.addEventListener('click',function(e){
    let firstNum = "";
    let operationArr = [];
    for (let char in inputArr){
        if (numbReg.test(inputArr[char]) || inputArr[char] == "."){
            firstNum += inputArr[char]
        }
        else {
            operationArr = [...operationArr, Number(firstNum), inputArr[char]]
            firstNum = ""
        }
    }
    operationArr = [...operationArr, Number(firstNum)]
    let i = 0;
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

    inputArr =[]
    for (let chars of String(operationArr[0])){
        inputArr = [...inputArr, chars]
    }  
    console.log(inputArr)
 
    calcScreen.value = operationArr
});