function sumOfDivided(lst) {
    //console.log('input table: ', lst)
    let fakeTable = [];
    let tempTable = [];
    let arr2 = [];
    let finalArray = [];
    let primes = [2,3,5,7,9,11,13,17,19,23,27,29];
    //console.log('-------------------------------------')
    let firstTable = lst.map(divisibleByPrime);
    //console.log(firstTable);


    firstTable.map(function (t) {
        t.map(function (t2) {
            arr2.push(t2)
        })
    });

    let result = toOneTable(arr2);

    for (let k=0; k<result.length;k++){
        for (let j=0;j<result.length;j++) {
            if (result[k][0] === result[j][0] && result[k] !== result[j]){
                finalArray.push([result[k][0],result[k][1]+result[j][1]])
                result.splice(k,1);
            }
            else if (j=(result.length)-1 && result[k][0] !== result[j][0]){
                finalArray.push(result[k]);
            }
            else {}
        }
    }
    console.log(finalArray)

    
    // result.map(function (table) {
    //     for (let j=0; j<result.length-1; j++){
    //         let index = result.indexOf(table)
    //         console.log(index);
    //         if (table[0] === result[j+][0]){
    //             finalArray.push([table[0],table[1]+result[j+1][1]])
    //         }
    //         else {
    //
    //         }
    //
    //
    //         console.log(finalArray)
    //     }
    // });
    console.log(finalArray)






    function toOneTable(arr2) {
        var result = [];
        for (var i=0; i<arr2.length;i++) {
            if (!arr2[i+1]){
                result.push(arr2[i]);
            }
            else if(arr2[i][0] !== arr2[i+1][0]){
                result.push(arr2[i])
            }
            else if (arr2[i][0] === arr2[i+1][0]){
                result.push([arr2[i][0],(arr2[i][1]+(arr2[i+1][1]))])
                i = i+1;
            }
            else{continue}
        }
        console.log('result: ', result)
        return result;
    }

    function divisibleByPrime(number) {
        for(var i=0;i<=primes.length;i++) {
            if (number % primes[i] === 0) {
                // console.log('number: ', number)
                // console.log('prime: ', primes[i]);
                fakeTable.push(primes[i], number);
                // console.log('current table: ', fakeTable)
                // console.log('-------------------------------------', i)
            }
            else {}
            tempTable.push(fakeTable);
            fakeTable = [];
        }
        // console.log('tempTable before: ', tempTable)
        var newTable = tempTable.filter(function (table) {
            return table.length !== 0;
        });
        // console.log('newTable: ', newTable);
        // console.log('-------------------------------------\n-------------------------------------', i)
        tempTable = [];
        return newTable
    }

}


sumOfDivided([12,15,18])