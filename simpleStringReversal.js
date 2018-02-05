function solve(str){
    var space;
    var position = [];
    var occurrence = str.match(/ /g);
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
    news = news.reverse().join('').split('');
    for (var j=0; j<position.length;j++){
        news.splice(position[j],0,' ');
    }
    news = news.join('');
    console.log(news);
}
solve("codewars");