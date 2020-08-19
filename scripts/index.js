'use strict';

const numberButtonNode = document.querySelectorAll('.number');
const operationButtonNode = document.querySelectorAll('operator')


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
        calcScreen.value += button.value
    })
})





const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function(e){
    const calcScreen = document.getElementById('input')
    calcScreen.value = 0
    inputArr =[]
})