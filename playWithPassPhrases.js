function playPass(s, n) {
    s = s.split("");
    console.log(s);
    var newLetter = "";
    var newWord = [];
    var alphabet = 'abcdefghIjkLmnopqrstuvwxyzabcdefghIjkLmnopqrstuvwxyz'.toUpperCase().split("");

    /*for (var j=0;j<s.length;j++){
        var single = s[j];
        var twoIndex = alphabet.indexOf(single);
        index.push(twoIndex);
    }*/
    //zastępujemy kod powyżej funkcją map:
    //var oneIndex = s.map(function (t) { return alphabet.indexOf(t) })
    var oneIndex = s.map((t) => alphabet.indexOf(t))


    console.log("oneIndex = " + oneIndex);
    var nIndex = oneIndex.map(function (x) {
        if (x === -1) {
            return x = " ";
        }
        else {
            return x+n;
        }
    });
    console.log("new index " + nIndex);

    for (var i=0; i<nIndex.length<i++;){
        newLetter = alphabet[nIndex[i]];
        newWord.push(newLetter);
    }

    /*var finalWord = [];
    for (g=0;g<nIndex.length;g++){
        var letterNew = alphabet[nIndex[g]];
        finalWord.push(letterNew);
    }
    console.log(finalWord);*/
    //zastępujemy kod powyżej funkcją map:
    var finalWord = nIndex.map(function (t) { return alphabet[t] });
    console.log("finalword " + finalWord);
    for (var r=0;r<finalWord.length;r++){
        if (finalWord[r] === undefined){
            finalWord[r] = s[r];
        }
    }
    console.log("finalword 2: " + finalWord);
    console.log(typeof finalWord[10]);
    var mySet = ['0','1','2','3','4','5','6','7','8','9','!'];
    var isNumber = finalWord.filter(function (t) {
       return mySet.includes(t)});
    console.log("isNumber: " + isNumber);
    var toNumber = isNumber.map(function (t) { return parseInt(t) });

    var changedNumbers = toNumber.map(function (t) { return 9-t });
    for (i=0;i<changedNumbers.length;i++){
        if (isNaN(changedNumbers[i])){
            changedNumbers[i] = mySet[10]
            console.log(changedNumbers)
        }
        else{
            changedNumbers[i] = changedNumbers[i]
        }
    }
    console.log('changenumbers: ' + changedNumbers);
    var modifiedArray = finalWord.map(x => x)
    /*var listedNumbers = changedNumbers.map(function (t) { return t })
    console.log(listedNumbers)
    modifiedArray.splice(modifiedArray.indexOf(isNumber[0]),isNumber.length);
    modifiedArray = modifiedArray.concat(listedNumbers);*/
    console.log("xWord: ", modifiedArray)
    modifiedArray= modifiedArray.toString().replace(/,/g,"")
    console.log("xWord: ", modifiedArray)
    var caseArray = [];
     for (i=0;i<modifiedArray.length;i++){
         if (i % 2 === 0){
             caseArray.push(modifiedArray[i].toUpperCase());
             //console.log('parzysta:', caseArray)
         }
         else {
             caseArray.push(modifiedArray[i].toLowerCase());
             //console.log('nieparzysta:', caseArray)

         }
     }

    caseArray = caseArray.reverse().join('');
    console.log(caseArray)
    console.log(typeof caseArray[0])
    var arrayIndex = [];
    for (i=0;i<caseArray.length;i++){
        arrayIndex.push(caseArray.indexOf(caseArray.match(/\d+/)))
    }
    console.log(arrayIndex)
    var listedNumbers = changedNumbers.map(function (t) { return t })
    console.log(listedNumbers)

}
playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2);