"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print(text) {
    console.log(text);
}
exports.print = print;
function addVal(value1, value2, operation) {
    var sum = 0;
    if (operation.length > 2) {
        throw 'Only 1 Character Allowed';
    }
    if (operation == '*') {
        sum = value1 * value2;
        return sum;
    }
}
exports.addVal = addVal;
