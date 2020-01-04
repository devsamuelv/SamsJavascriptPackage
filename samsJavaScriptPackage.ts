export function print(text:any) {
    console.log(text);
}

export function addVal(value1:number, value2:number, operation:string) {
    var sum: number = 0;
    if (operation.length > 2) {
        throw 'Only 1 Character Allowed';
    }

    if (operation == '*') {
        sum = value1 * value2;
        return sum;
    }
}