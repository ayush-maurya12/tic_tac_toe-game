let boxes=document.querySelectorAll(".box");
let playerx="X";
let playero="O";
let playerTurn=playerx;
let startgame=()=>{
    boxes.forEach(box=>{
        box.addEventListener('click',(e)=>{
            if(e.target.innerHTML===""){
            e.target.innerHTML=playerTurn;
            if(checkwin()){
                document.getElementById("result").innerHTML="Player "+playerTurn+"  is Winner";
                document.getElementById("info").innerHTML="";
            }
            else if(draw()){
                document.getElementById("result").innerHTML="Match Draw";
                document.getElementById("info").innerHTML="";
            }else{
            changeplayerTurn();
            }
            }else{
                alert("Invalid");
            }  
        });
    });
}
let changeplayerTurn=()=>{
    if(playerTurn===playerx){
        document.getElementById("info").innerHTML="Turn of O";
        playerTurn=playero;
    }else{
        document.getElementById("info").innerHTML="Turn of X";
        playerTurn=playerx;
    }
}
let checkwin=()=>{
    let condition=[
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,4,6],
        [3,4,5],
        [2,5,8],
        [6,7,8]
    ];
    for(let i=0;i<condition.length;i++){
        let[pos1,pos2,pos3]=condition[i];
        if(boxes[pos1].innerHTML!=='' && boxes[pos1].innerHTML===boxes[pos2].innerHTML &&
            boxes[pos2].innerHTML===boxes[pos3].innerHTML){
                boxes[pos1].style.backgroundColor="yellow";
                boxes[pos2].style.backgroundColor="yellow";
                boxes[pos3].style.backgroundColor="yellow";
                return true;
            }
    }
    return false;
}
function draw(){
    let count=0;
    boxes.forEach(box=>{
        if(box.innerHTML===''){
            count++
        }
    });
    return count===0 && !checkwin();
}
function reset(){
    location.reload();
}
startgame();
