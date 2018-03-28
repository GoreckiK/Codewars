function playPass(s, n) {
    console.log(s, n)
    s = s.split("");
    var alphabet = 'abcdefghIjkLmnopqrstuvwxyzabcdefghIjkLmnopqrstuvwxyz'.toUpperCase().split("");
    let spaces = [];
    for (var j=0; j<s.length;j++){
        if (s[j] === " "){
            spaces.push(j)
        }
    }
    console.log(spaces);
    let changedLetters = s.map(function (letter){
        if (letter === "0" || letter === "1" || letter === "2" || letter === "3" || letter === "4" || letter === "5" || letter === "6" || letter === "7" || letter === "8" || letter === "9"){
            let result = 9 - Number(letter);
            return result.toString()
        }
        else if (letter === '!' || letter === " " || letter === '.' || letter === '\''){
            return letter;
        }
        return alphabet[alphabet.indexOf(letter)+n]
    });
    let letterSized = [];

    console.log(changedLetters)
    for (let i=0; i<changedLetters.length;i++){
        if (i % 2 === 0){
            letterSized.push(changedLetters[i])
        }
        else {
            letterSized.push(changedLetters[i].toLowerCase())
        }
    }
    console.log('afterloop: ', letterSized);

    let letterSized2 = letterSized.reverse().join('')
    console.log(letterSized2)


} playPass('TO BE HONEST WITH YOU I DON\'T USE THIS TEXT TOOL TOO OFTEN BUT HEY... MAYBE YOUR NEEDS ARE DIFFERENT.', 5)