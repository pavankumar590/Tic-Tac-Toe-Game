let boxes = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newbtn = document.querySelector(".new-button");
let resetBtn = document.querySelector(".reset-button");

let turnO=true;


//reset button


let resetgame=()=>{
  turnO=true;
  enableboxes();
  msgContainer.classList.add("hide");
};

let enableboxes=()=>{
  for(let box of boxes){
    turnO=true;
    box.disabled=false;
    box.innerText="";
    
  }
};

let winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("cliked");
    if(turnO==true){
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    checkWinner();
  });
});


let showWinner=(winner)=>{
  msg.innerText="congratulations the winner "+winner  ;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

let disableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
};

let checkWinner=()=>{
  for(let pattern of winpatterns){
  //   console.log(pattern[0],pattern[1],pattern[2]);
  //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
   
   let pos1 = boxes[pattern[0]].innerText;
   let pos2 = boxes[pattern[1]].innerText;
   let pos3 = boxes[pattern[2]].innerText;
   if(pos1!=="" && pos2!=="" && pos3!==""){
   if(pos1===pos2 && pos2===pos3){
    console.log("congratulations The winner is",pos1);
    showWinner(pos1);
    return true;
   }
  }
  
  }
};

resetBtn.addEventListener("click",resetgame);

newbtn.addEventListener("click",resetgame);
