function remove(s){
    var tab = [];
    var lastIndex;
    let last = s.lastIndexOf('!');
    let j;
    console.log('last:', last)
    if (s[last] === '!' && s[last-1] === '!' && s[s.length-1] === "!"){
        for (var k=1;k<s.length;k++){
            if (s[last] === '!' && s[last-k] === s[last]){
                lastIndex = last-k
            }
            else {
                break;
            }
        }
        console.log('lastIndex: ', lastIndex)

        for (var i=0;i<lastIndex;i++){
            if (s[i] === "!") {
                tab.push(i)
            }
        }
        s = s.split('');
        for (j=0; j< tab.length; j++){
            s.splice(tab[j]-j,1)
            console.log('index: ', tab[j]-j)
            console.log(s.join(''))
        }
        s = s.join('')
        console.log(s)
    }
    else if (s[last] === '!' && s[last-1] !== '!' && last!==0 && s[s.length-1] === "!"){
        var sliced = s.slice([-1]);
        console.log(sliced)
        s = s.split('');
        s = s.filter(function (sign) {
            return sign !== '!';
        })
        s = s.concat(sliced)
        s = s.join("")
    }
    else {
        s = s.replace(/!/g,'')
    }

    console.log('new: ', s)
}
remove("louqhz! zsasf lelsglb hhizco ydh hja")