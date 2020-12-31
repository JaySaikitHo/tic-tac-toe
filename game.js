let play_board = ["","","","","","","","",""];
const squares = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset");

let player1Score = 0;
let player2Score = 0;
// localStorage.setItem("p1Score", player1Score)
// localStorage.setItem("p2Score", player2Score)
let player1 = true;
let count = 0;



init();
getScore();

function init() { 
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", playerMove
        
        )}
    resetButton.addEventListener("click", reset);
    
}
    
    
    
function reset () {
        localStorage.clear();
        play_board = ["","","","","","","","",""];
        window.location.reload();
        document.getElementById("p1Score").innerHTML = 0;
        document.getElementById("p2Score").innerHTML = 0;
        // for(let i = 0; i < squares.length; i++){
        //     squares[i].innerHTML = "";
        // }
}
    
    
function getScore () {
    p1Display = localStorage.getItem("p1Score") || 0; 
    p2Display = localStorage.getItem("p2Score") || 0; 
    console.log(p1Display,p2Display)
    document.getElementById("p1Score").innerHTML = p1Display;
    document.getElementById("p2Score").innerHTML = p2Display;
}   




function playerMove() {
    
    if(player1) { 
        this.innerHTML = "<img src = 'bluex.png'>"
        play_board[this.id] = "x"
    } else { 
        this.innerHTML = "<img src = 'blueo.png'>"
        play_board[this.id] = "o"
    }
    
    count++;
    if(count >= 5){
        if(checkForWinner()) {
           
             if(player1 === true) {
                     player1Score = localStorage.getItem("p1Score");
                     player1Score++;
                     localStorage.setItem("p1Score", player1Score)
                     getScore();
                 } else if(player1 === false){
                     player2Score = localStorage.getItem("p2Score")
                     player2Score++;
                     localStorage.setItem("p2Score", player2Score)
                     getScore();
                 }     
                   
                    setTimeout(function() {if(!alert(`${player1 ? "player 2" : "player 1"} is the winner, play again?`))
                    window.location.reload();
                }, 400)
            } 
        } 
    
    player1 = !player1;
}


function checkForWinner(player1) {
    // console.log("checking now")
    // console.log("playerboard", play_board)
    if(play_board.slice(0,3).join("") === "xxx" || play_board.slice(0,3).join("") === "ooo") {
        
        return true;

    } else if(play_board.slice(3,6).join("") === "xxx" || play_board.slice(3,6).join("") === "ooo") {
        
        return true;
    
    } else if(play_board.slice(6,8).join("") === "xxx" || play_board.slice(6,8).join("") === "ooo") {
        
        return true;    
    
    } else if(play_board[0] + play_board[3] + play_board[6] === "xxx" ||play_board[0] + play_board[3] + play_board[6] ===  "ooo") {
       
        return true;    
    
    } else if(play_board[1] + play_board[4] + play_board[7] === "xxx" ||play_board[1] + play_board[4] + play_board[7] ===  "ooo") {
        
        return true;
    
    } else if(play_board[2] + play_board[5] + play_board[8] === "xxx" ||play_board[2] + play_board[5] + play_board[8] ===  "ooo") {
        
        return true;
    
    } else if(play_board[0] + play_board[4] + play_board[8] === "xxx" ||play_board[0] + play_board[4] + play_board[8] ===  "ooo") {
        
        return true;
    
    } else if(play_board[2] + play_board[4] + play_board[6] === "xxx" ||play_board[2] + play_board[4] + play_board[6] ===  "ooo") {
        
        return true;
    } else if(!play_board.includes("")) {
       setTimeout( function() {if(!alert("Draw Game, click ok to play again"))
       window.location.reload()}, 400);
        
    }
    
    return false;
}
