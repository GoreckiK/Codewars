
function sumOfDivided(lst) {
    console.time('sumOfDivided')


    let fakeTable = [];
    let tempTable = [];
    let arr2 = [];
    let endResult = {};
    let simpleArray = []
    var maxFromArray = Math.max.apply(Math, lst);
    maxFromArray < 0 ? maxFromArray = Math.abs(Math.min.apply(Math, lst)) : maxFromArray = Math.abs(maxFromArray);

    let primes = [2];
    for ( var i = 3; i <= maxFromArray; i+=2 ) {
        if ( isPrime(i) ) {
            primes.push(i);
        }
    }

    let firstTable = lst.map(divisibleByPrime);

    firstTable.map(function (t) {
        t.map(function (t2) {
            arr2.push(t2)
        })
    });

    arr2.forEach(function (arr) {
        return endResult[arr[0]] = endResult[arr[0]] ? endResult[arr[0]] + arr[1] : arr[1]
    })

    for (var property in endResult){
        simpleArray.push([Number(property), endResult[property]])
    }
    console.timeEnd('sumOfDivided');
    return simpleArray

    function isPrime(num) {
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    function divisibleByPrime(number) {
        for (var i=0;i<=primes.length;i++) {
            if (number % primes[i] === 0) {
                fakeTable.push(primes[i], number);
            }
            else {}
            tempTable.push(fakeTable);
            fakeTable = [];
        }
        var newTable = tempTable.filter(function (table) {
            return table.length !== 0;
        });
        tempTable = [];
        return newTable
    }
}

sumOfDivided([-29804, -4209, -28265, -72769, -31744]);