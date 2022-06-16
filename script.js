let firstNUM = prompt('birinchi sonni kiriting')
let secondNUM = prompt('ikkinchi sonni kiriting')
let operator = prompt('operatorni kiriting(+  -   /  *)')
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