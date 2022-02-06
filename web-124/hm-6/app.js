
var $input = document.getElementById("input");
var $deal = document.getElementById("deal");
var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'A'];
var suits = ['♠', '♥', '♦', '♣'];
var cards = [];

function makeCards() {
    for(var i = 0; i < suits.length; i++) {
        for(var j = 0; j < numbers.length; j++) {
            cards.push(numbers[j] + suits[i]);
        }
    }
    cards.length = 52;
    return cards;
}


function choose_two_cards(){
    
    makeCards()
    var randoms; 
    var couunt = 0;
    var two_Cards= [];
    var the_FinalCards; 
    
    for(var i = 0; i < cards.length; i++){
        
        randoms = Math.floor(Math.random() * cards.length);
        
        two_Cards.push(cards.splice(randoms,1));

        the_FinalCards = two_Cards.join(" ");
                
        couunt++;
        
        if(couunt > 1){
            break;
        }
    }

    return the_FinalCards;
}

function shuffle(arr){
    for(var i = arr.length - 1; i > 0; i--){
        var rand = Math.floor(Math.random() * i);
        
        var temp = arr[i];
        arr [i] = arr[rand];
        arr[rand] = temp;
    }
    return arr;
}

$deal.onclick = function(){

    var html = "";

    for(let i = 0; i < $input.value; i++){
        html += `<p>  Your Cards : ${choose_two_cards()} <p>`
    }
    
    document.getElementById("output").innerHTML = html;
    
}