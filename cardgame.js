var deck = ['joker','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
    '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
    '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
    '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

function cardGame(card1, card2, trump) {

    card1 = card1.split('');
    card2 = card2.split('');
    switch (card1[0]){
        case 'J':
            card1[0] = ['1','1'];
            break;
        case 'Q':
            card1[0] = ['1','2'];
            break;
        case 'K':
            card1[0] = ['1','3'];
            break;
        case 'A':
            card1[0] = ['1','4'];
            break;
    }
    switch (card2[0]){
        case 'J':
            card2[0] = ['1','1'];
            break;
        case 'Q':
            card2[0] = ['1','2'];
            break;
        case 'K':
            card2[0] = ['1','3'];
            break;
        case 'A':
            card2[0] = ['1','4'];
            break;
    }
    card1 = card1.join('');
    card1 = card1.toString().replace(',','');
    card2 = card2.join('');
    card2 = card2.toString().replace(',','');
    console.log('card1.L = ', card1.length);
    console.log('card1[0] = ', card1[0]);
    console.log('card1[1] = ', card1[1]);
    console.log('card1[2] = ', card1[2]);
    console.log('card2.L = ', card2.length);
    console.log('card2[0] = ', card2[0]);
    console.log('card2[1] = ', card2[1]);
    console.log('card2[2] = ', card2[2]);
    console.log('trump =  ', trump);

    if (card1 == 'joker' && card2 == 'joker'){
        console.log('Someone cheats.');
    }
    else if (card1 == 'joker' || card2 == 'joker') {
        if (card1 == 'joker' ) {
            console.log('The first card won.');
        }
        else {
            console.log('The second card won.');
        }
    }
    else {
        if (card1.length === 3 && card2.length === 3) {
            if (card1[1] == card2[1] && card1[0] == card2[0] && card1[2] == card2[2]) {
                console.log('Someone cheats.')
            }
            else if (card1[2] !== card2[2] && card1[2] !== trump && card2[2] !== trump) {
                console.log('Let us play again.')
            }
            else if (card1[2] == card2[2]) {
                if (card1[1] > card2[1]) {
                    console.log('The first card won.')
                }
                else {
                    console.log('The second card won.');
                }
            }
            else if (card1[2] == trump) {
                console.log('The first card won.');
            }
            else if (card2[2] == trump) {
                console.log('The second card won.');
            }
        }
        else if (card1.length == 3 && card2.length == 2) {
            if (card1[2] !== card2[1] && card1[2] !== trump && card2[1] !== trump){
                console.log('Let us play again.')
            }
            else if (card1[1] == card2[2] && card1[1] == trump && card2[2] == trump){
                console.log('The first card won.')
            }
            else if (card1[2] == trump){
                console.log('The first card won.');
            }
            else if (card2[1] == trump){
                console.log('The second card won.');
            }
            else {
                console.log('The first card won.');
            }
        }
        else if (card1.length == 2 && card2.length == 3) {
            if (card1[1] !== card2[2] && card1[1] !== trump && card2[2] !== trump){
                console.log('Let us play again.')
            }
            else if (card1[1] == card2[2] && card1[1] == trump && card2[2] == trump){
                console.log('The second card won.')
            }
            else if (card1[1] == trump){
                console.log('The first card won.');
            }
            else if (card2[2] == trump){
                console.log('The second card won.');
            }
            else {
                console.log('The second card won.');
            }
        }
        else {
            if (card1[1] == card2[1] && card1[0] == card2[0]) {
                console.log( 'Someone cheats.')
            }
            else if (card1[1] == card2[1]) {
                if (card1[0] > card2[0]) {
                    console.log( 'The first card won.')
                }
                else {
                    console.log( 'The second card won.');
                }
            }
            else if (card1[1] == trump || card2[1] == trump) {
                if (card1[1] == trump) {
                    console.log( 'The first card won.');
                }
                else {
                    console.log( 'The second card won.');
                }
            }
            else {
                console.log( "Let us play again.")
            }
        }
    }
}

cardGame('K♦', 'J♠', '♦');

