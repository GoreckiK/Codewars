function stringSuffix(s) {
    // tworze puste tablice, które wykorzystam w pętlach
    var suffixes = [];
    var correctArray = [];
    var tablica = [];
    // pętla, która stworzy tablicę correctArray zawierająca stringi do porównania ze stringiem s
    for (k=0; k < s.length; k++) {
        suffixes = s.substring(k);
        correctArray.push(suffixes);
    }
    // dzielę string z inputu na pojedyncze litery
    s = s.split('');
    // pętla która porównuje ilość liter w inpucie do wyrazu z tablicy
    for (var j=0; j<correctArray.length; j++){
        // rozdzielam pierwszy string na litery, celem porównania liter w kolejności do pierwszego stringa z tablicy correctArray
        var firstString = correctArray[j].split('');
        var counter = 0;
        // pętla która porównuje zgodność kolejnych liter z integera s i j-tego integera, zwracając counter określający liczbę trafionych liter
        for (var i=0; i < s.length; i++){
            if (s[i] === firstString[i]){
                counter = i+1;
            }
            else {
                break;
            }
        }
        // każdy counter wrzucamy do tablicy przed wyzerowaniem
        tablica.push((counter));
    }
    // tworzymy funkcję sumująca elementy w tablicy(countery)
    function getSum(a,b) {
        return a+b;
    }
    var suma = tablica.reduce(getSum);
    // zamieniamy sume która jest obiektem na liczbę
    var finalValue = parseInt(suma);
    console.log(finalValue);
    return finalValue;
}
stringSuffix("aaaaaaaaaaa");