

export function add(firstnumber, b) {
    return (firstnumber + b)
}

export function divide(a, b) {
    return (a / b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function combo(a, b, c, d) {
    return (a - b + c * d)
}

console.log(add (23, 8.2))

console.log(divide (2, 1))

console.log(subtract(5, 6))

console.log(multiply(4, (multiply(1, 2))))

console.log(combo(1, 1, 1, 1))

