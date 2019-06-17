$(document).ready(function(){
    let player1 = "X";
    let player2 = "O";

    let currentTurn = 1;
    let movesMade = 0;

    let sqr = $(".box");
    let winnerContainer = $(".winner");
    let reset = $(".reset");

    sqr.on('click', function(e){
        movesMade++;
        
        if (currentTurn === 1){
            event.target.innerHTML = player1;
            event.target.style.color = "red";
            currentTurn++;
        } else {
            event.target.innerHTML = player2;
            event.target.style.color = "blue";
            currentTurn--;
        }
        if (checkWinner()){
            const winner = currentTurn === 1 ? player2 : player1;
            declareWinner(winner);
        }

    });

    reset.on("click", function(e){
        window.location.reload(false)
    });

    function checkWinner(){
        if (movesMade > 4){
            let moves = Array.prototype.slice.call($(".box"))
            let results = moves.map(function(square){
                return square.innerHTML;
            });
        
        let winningCombo = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        return winningCombo.find(function(combo){
            if (results[combo[0]] !== "" &&  results[combo[1]] !== "" &&  results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]){
                return true
            } else {
                return false;
            }
            
        })

        }
        };

        function declareWinner(winner){
        winnerContainer.css("display","block")
        reset.css ("display","block")
        winner === player1? "X" : "O"
        winnerContainer.html(winner + " WINS!")
    
    };

})