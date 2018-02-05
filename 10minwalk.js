function isValidWalk(walk){

    var walk = walk.toString().replace(/,/g, "");
    var nMatch = (walk.match(/n/g)||[]).length;
    var sMatch = (walk.match(/s/g)||[]).length;
    var wMatch = (walk.match(/w/g)||[]).length;
    var eMatch = (walk.match(/e/g)||[]).length;
    if (walk.length == 10 & nMatch == sMatch & wMatch == eMatch){
        return true;
    }
    else {
       return false;
    }

}
isValidWalk(['n','s','n','s','n','s','n','s','n','s'])