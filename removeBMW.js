function removeBMW(str) {
    try {
        checkType(str)
    }
    catch (e){
        console.log(e.message)
    }
}

function checkType(str) {
    if (typeof str === 'string') {
        console.log(str.replace(/B|M|W/gi, ''))
    }
    else {
        throw new Error('This program only works for text.')
    }
}
removeBMW('bmws')