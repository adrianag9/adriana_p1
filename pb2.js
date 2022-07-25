let string1 = {
    a: 1,
    b: 2
};

let string2 = {
    b: 3,
    d: 4
};

const concString = Object.assign(string1, string2);
console.log(concString);