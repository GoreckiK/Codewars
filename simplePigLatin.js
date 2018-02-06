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
    var dummy = news;
    for (j=0; j<occurrence+1;j++){
        firstWord = dummy.slice(position[j-1],position[j]);
        if (firstWord[0] === ''){
            firstWord = firstWord.slice(1);
        }
        else {};
        firstLetter = firstWord[0];
        firstWord = firstWord.slice(1);
        firstWord = firstWord.concat(firstLetter + addOn);
        firstWord = firstWord.join('');
        news = news.slice(firstWord.length-1);
        allWords.push(firstWord);
    }
    allWords = allWords.toString();
    var preStep = [];
    preStep = preStep.concat(allWords);
    preStep=preStep[0];
    for (i=0; i<position.length;i++){
        preStep = preStep.replace(",","");
    }
    preStep = preStep.split("");
    for (var l=0, g=1; l<occurrence;l++,g++){
        preStep.splice(position[l]+2*g,0,' ');
    }
    preStep = preStep.join('');
    preStep = preStep.toString();
    console.log(preStep);
}
pigIt('Pig latin is cool')