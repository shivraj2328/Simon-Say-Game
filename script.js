let gameSeq =[];
let userSeq =[];

let started = false;
let level = 0;
let colors = ["red","green","yellow","blue"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started")
        started = true;
        levelUp();
    }

});


function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randNumber = Math.floor(Math.random()*4);
    let randColor = colors[randNumber];
    let randBtn = document.querySelector(`.${randColor}`);
    flashBtn(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkAns(idx){
    // let idx = level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            
        }
    }else{
        h2.innerText="Game over! Press any key to restart";
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}