function pigIt(str){
    var space,firstWord,firstLetter;
    var position = [];
    var allWords = [];
    var finalWord = [];
    var occurrence = str.match(/ /g);
    var addOn = 'ay';
    if (occurrence !== null) {
        occurrence = occurrence.length;
    }
    else {
        occurrence = 0;
    }
    var news = str.split('');
    for (var i=0; i<occurrence;i++){
        space = news.indexOf(' ');
        position.push(space);
        news.splice(space,1,'');
    }
    console.log("pozycje: " + position);
    //console.log(news);
    console.log(occurrence);
    /*firstWord = news.slice(0,position[0]);
    firstLetter = firstWord[0];
    firstWord = firstWord.slice(1)
    console.log(firstWord);
    firstWord = firstWord.concat(firstLetter + addOn);
    console.log(firstWord);
    firstWord = firstWord.join('');
    console.log(firstWord);*/
    var dummy = news;
    console.log(dummy);
    for (j=0; j<occurrence+1;j++){
        console.log("zaczynamy " + news);
        firstWord = dummy.slice(position[j-1],position[j]);
        if (firstWord[0] === ''){
            firstWord = firstWord.slice(1);
        }
        else {};
        console.log("Pierwsze " + firstWord);
        firstLetter = firstWord[0];
        firstWord = firstWord.slice(1);
        console.log(firstWord);
        firstWord = firstWord.concat(firstLetter + addOn);
        console.log(firstWord);
        firstWord = firstWord.join('');
        console.log(firstWord);
        console.log(firstWord.length);
        news = news.slice(firstWord.length-1);
        console.log("koniec " + news);
        allWords.push(firstWord);
        console.log("zpushowane " + allWords);
    }

    for (var i=0; i<occurrence;i++){
        space = news.indexOf(' ');
        position.push(space);
        news.splice(space,1,'');
    }

    for (var k=0; k<=occurrence;k++){
        allWords = allWords.push()
        space = dummy.indexOf(' ');
        position.push(space);
        allWords.splice(space,1,'');
    }
    console.log(allWords);
}
pigIt('Pig latin is cool')