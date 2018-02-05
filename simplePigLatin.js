function pigIt(str){
    var space,firstWord,firstLetter;
    var position = [];
    var allWords = [];
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

    for (j=0; j<occurrence+1;j++){
        firstWord = news.slice(0,position[j]);
        firstLetter = firstWord[0];
        firstWord = firstWord.slice(firstWord.length);
        firstWord = firstWord.concat(firstLetter + addOn);
        firstWord = firstWord.join('');
        console.log(firstWord.length);
        news = news.slice(firstWord.length-1);
        console.log(news);
        allWords.push(firstWord);
        console.log(allWords);
    }
}
pigIt('Pig latin is cool')