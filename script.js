let firstNUM = prompt('Enter your first number')
let secondNUM = prompt('Enter your second number')
let operator = prompt('Enter an Operator (+  -   /  *)')
let javob = undefined;

if (operator=='+'){
    javob = +firstNUM + +secondNUM
    document.write(`<h1>${firstNUM} + ${secondNUM} = ${javob}</h1>`)
}
else if (operator=='-'){
    javob = +firstNUM - +secondNUM
    document.write(`<h1>${firstNUM} - ${secondNUM} = ${javob}</h1>`)
}
else if (operator=='/'){
    javob = +firstNUM / +secondNUM
    document.write(`<h1>${firstNUM} / ${secondNUM} = ${javob}</h1>`)
}
else if (operator=='*'){
    javob = +firstNUM * +secondNUM
    document.write(`<h1>${firstNUM} * ${secondNUM} = ${javob}</h1>`)
}
else {
    document.write('<h1>ERROR</h1>')
}
