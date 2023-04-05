export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
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

//기본 모듈로 내보내기
//export default {
//   add: add,
//   subtract: subtract,
// };