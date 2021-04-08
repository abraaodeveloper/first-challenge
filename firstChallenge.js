export default function summation(value) {
    if (typeof value != 'number'){
        throw new TypeError("the type of the value of being 'number'");
    }else if(value <= 0)
        throw new Error("the value must be positive");

    let total = 0;
    do {
        value--;
        if (value % 3 === 0 || value % 5 === 0)
            total += value;
    } while (value >= 3);

    return total;
}