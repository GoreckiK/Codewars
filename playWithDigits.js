function digPow(n, p){
    var splitedNumber = n.toString().split('');
    var calculatedValues = [];
    console.log(splitedNumber);
    var equation = 0;
    for (var i=0; i<splitedNumber.length; i++) {
        equation = Math.pow(splitedNumber[i],p+i);
        calculatedValues.push(equation);
    }
    console.log(calculatedValues);
    function getSum (a,b) {
        return a+b;
    }
    var result = calculatedValues.reduce((getSum));
    console.log(result);
    console.log(typeof result);
    var k = result/n;
    console.log(k);
    if (Number.isInteger(k) == true) {
        return k;
    }
    else {
        return -1;
    }
}
digPow(89,1);