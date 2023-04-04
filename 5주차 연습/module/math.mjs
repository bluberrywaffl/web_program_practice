export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x = y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    if(x >= y) {
        return x / y;
    }
    else if(x < y) {
        return y / x;
    }
}