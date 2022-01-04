 /*
    function clickHandler(event){
        console.log(event.target);
        alert("click");
    }
    function submitHandler(event){
        event.preventDefault();
        const $input = document.querySelector('[name=token-name]');
        alert($input.value);
        $input.value =""; //clear after we click submit
    }
<br><br><br><br><br><br><br>
    
    <form action="https://academy.moralis.io/lessons/event-handling" method="POST">
        <label>
            Token: <input type="text" name="token-name" />
        </label>

        <button type="submit">Submit</button>
    </form>
    */

$(document).ready(function(){

    let board = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let ct=0;
    document.getElementById("first").addEventListener("click", myFunction);
    document.getElementById("sec").addEventListener("click", myFunction2);
    document.getElementById("third").addEventListener("click", myFunction3);

    document.getElementById("four").addEventListener("click", myFunction4);
    document.getElementById("five").addEventListener("click", myFunction5);
    document.getElementById("six").addEventListener("click", myFunction6);

    document.getElementById("sev").addEventListener("click", myFunction7);
    document.getElementById("eight").addEventListener("click", myFunction8);
    document.getElementById("nine").addEventListener("click", myFunction9);


    function resetBoard(){
        document.getElementById("turns").innerHTML = "Turn of Player X!";
        document.getElementById("first").innerHTML = ".";
        document.getElementById("sec").innerHTML = ".";
        document.getElementById("third").innerHTML = ".";
        document.getElementById("four").innerHTML = ".";
        document.getElementById("five").innerHTML = ".";
        document.getElementById("six").innerHTML = ".";
        document.getElementById("sev").innerHTML = ".";
        document.getElementById("eight").innerHTML = ".";
        document.getElementById("nine").innerHTML = ".";
                    board = [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]
                    ]; 
                    ct=0;
    }

    function myFunction() {
        if(ct%2==0){
            document.getElementById("first").innerHTML = "X";
            board[0][0]='X';
            ct++;
        }else{
            document.getElementById("first").innerHTML = "O";
            board[0][0]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner!");
             const myTimeout = setTimeout(resetBoard, 5000);
        }
       
    }
    function myFunction2() {
          if(ct%2==0){
            document.getElementById("sec").innerHTML = "X";
            board[0][1]='X';
            ct++;
        }else{
            document.getElementById("sec").innerHTML = "O";
            board[0][1]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner!");
             const myTimeout = setTimeout(resetBoard, 5000);
        }
    }

    function myFunction3() {
          if(ct%2==0){
            document.getElementById("third").innerHTML = "X";
            board[0][2]='X';
            ct++;
        }else{
            document.getElementById("third").innerHTML = "O";
            board[0][2]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner!");
             const myTimeout = setTimeout(resetBoard, 5000);
        }
    }
    function myFunction4() {
          if(ct%2==0){
            document.getElementById("four").innerHTML = "X";
            board[1][0]='X';
            ct++;
        }else{
            document.getElementById("four").innerHTML = "O";
            board[1][0]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner!");
             const myTimeout = setTimeout(resetBoard, 5000);
        }
    }
    function myFunction5() {
          if(ct%2==0){
            document.getElementById("five").innerHTML = "X";
            board[1][1]='X';
            ct++;
        }else{
            document.getElementById("five").innerHTML = "O";
            board[1][1]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner!");
             const myTimeout = setTimeout(resetBoard, 5000);
        }
    }
    function myFunction6() {
          if(ct%2==0){
            document.getElementById("six").innerHTML = "X";
            board[1][2]='X';
            ct++;
        }else{
            document.getElementById("six").innerHTML = "O";
            board[1][2]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner!");
             const myTimeout = setTimeout(resetBoard, 5000);
        }
    }
    function myFunction7() {
          if(ct%2==0){
            document.getElementById("sev").innerHTML = "X";
            board[2][0]='X';
            ct++;
        }else{
            document.getElementById("sev").innerHTML = "O";
            board[2][0]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner!");
             const myTimeout = setTimeout(resetBoard, 5000);
        }
    }
    function myFunction8() {
          if(ct%2==0){
            document.getElementById("eight").innerHTML = "X";
            board[2][1]='X';
            ct++;
        }else{
            document.getElementById("eight").innerHTML = "O";
            board[2][1]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner!");
             const myTimeout = setTimeout(resetBoard, 5000);
        }
    }
     function myFunction9() {
          if(ct%2==0){
            document.getElementById("nine").innerHTML = "X";
            board[2][2]='X';
            ct++;
        }else{
            document.getElementById("nine").innerHTML = "O";
            board[2][2]='O';
            ct++;
        }
        chechIfDraw(board);
        if(checkWinner(board)==true){
            alert("We have a winner! The game will restart in 5 seconds...");           
             const myTimeout = setTimeout(resetBoard, 5000);
        }
    }
   
    function checkWinner(board){
        if(board[0][0] == board [0][1] && board[0][1] == board[0][2]){
            return true;
        }else if(board[1][0] == board [1][1] && board[1][1] == board[1][2]){
            return true;
        }else if(board[2][0] == board [2][1] && board[2][1] == board[2][2]){
            return true;
        }else if(board[0][0] == board [1][0] && board[1][0] == board[2][0]){
            return true;
        }else if(board[0][1] == board [1][1] && board[1][1] == board[2][1]){
            return true;
        }else if(board[0][2] == board [1][2] && board[1][2] == board[2][2]){
            return true;
        }else if(board[0][0] == board [1][1] && board[1][1] == board[2][2]){
            return true;
        }else if(board[0][2] == board [1][1] && board[1][1] == board[2][0]){
            return true;
        }

        return false;
    }
    function chechIfDraw(board){
        if(ct%2==0){
            document.getElementById("turns").innerHTML = "Turn of Player X!";
        }else{
            document.getElementById("turns").innerHTML = "Turn of Player O!";
        }
        let ct2=0;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j]=='O' || board[i][j]=='X')
                    ct2++;
            }
        }
        if(ct2==9 && checkWinner(board)==false){
            alert("DRAW!, the game will reset in 5 seconds...");
            ct2=0;
            const myTimeout = setTimeout(resetBoard, 5000);
        }else{
            ct2=0;
        }
    }

   
});