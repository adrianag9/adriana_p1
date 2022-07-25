function Armstrong(n) {
    let sum = 0;
    let str = n.toString();
    let pow = str.length;
    for (let i = 0; i < pow; i++){
        let digit = parseInt(str[i])
        sum += Math.pow(digit, pow);
    }
    if(sum == n ){
        return true;
    }
    else {
        return false;
    }
}

console.log(Armstrong(78));
console.log(Armstrong(149));