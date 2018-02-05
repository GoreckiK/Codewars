function longestConsec(strarr,k) {
    const n = strarr.length;
    var allWords = [];
    var kString = "";
    var step = [];
    var other, longest = "";
    var copy =[];

    if (n === 0 || k > n || k <= 0) {
        return "";
    }
    else {
        for (var i=0; i<n ;i++){
            step = [];
            for (var j=i; j<k+i; j++){
                kString = strarr[j];
                step.push(kString);
                other = step.join().replace(/,/g,"");
            }
            allWords.push(other);
        }
        copy = copy.concat(allWords);
        allWords.sort(function (a,b) {return b.length - a.length});
        if (allWords[0].length === allWords[1].length) {
            for (var counter = 0; counter <= allWords.length;counter++){
                if (allWords[counter].length === allWords[counter+1].length) {
                    continue;
                }
                else {
                    break;
                }
            }
            console.log(counter);
            if (copy.indexOf(allWords[0]) < copy.indexOf(allWords[1])) {
                longest = allWords[0];
                console.log(longest);
            }
            else {
                longest = allWords[1];
                console.log(longest);
            }
        }
        else {
            longest = allWords[0];
            console.log(longest);
        }
    }
}