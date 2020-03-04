const Screen = document.querySelector('.screen')

const updateScreen = (number) => {
    Screen.value = number
}

const numbers = document.querySelectorAll(".num")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

let prevInput = '0'
let operation = ''
let currentInput = '0'
const inputNumber = (number) => {
    if (currentInput === '0') {
        currentInput = number
    } else {
        currentInput += number
    }
}

const operators = document.querySelectorAll(".function")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevInput = currentInput
    operation = operator
    currentInput = '0'
}

const equalSign = document.querySelector('.equal-to')

equalSign.addEventListener('click', () => {
    calculator()
    updateScreen(currentInput)
})

const calculator = () => {
    let result = 0
    switch(operation) {
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput)
            break
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            break
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput)
            break
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput)
            break
        default:
            return
    }
    currentInput = result.toString()
    operation = ''
}