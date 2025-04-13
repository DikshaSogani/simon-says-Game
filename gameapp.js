let gameSeq = [];
let userSeq = [];
let colors = ["box1","box2","box3","box4"];
let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game is started");
    started = true;

    levelUp(); 
    }   // game is started
    
  

}); 

let h2 = document.querySelector("h2");
function btnFlash(btn){
console.log("flash");
btn.classList.add("flash");
console.dir(btn.classList);
setTimeout(function (){
btn.classList.remove("flash");
 console.log("settimeout")
},250);
}
function levelUp(){
  userSeq = []; //jese level up hoga user ko starting se color squence dalna hoga
  level++;    //level start karenge game ke aur button flash karana hai
  h2.innerText = (`level ${level}`);
  //random button ko flash kareyega game
  let randomIdx = Math.floor(Math.random()*3);
  let randomColor = colors[randomIdx];
  let randomBtn = document.querySelector(`#${randomColor}`);
  let ranBtn = randomBtn.getAttribute("id");
//   console.log(randomIdx);
//   console.log(randomColor);
//   console.log(randomBtn);
  gameSeq.push(ranBtn);
  console.log(gameSeq);
  btnFlash(randomBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){ //middle sequence check
       if(gameSeq.length == userSeq.length){ //last sequence check
    setTimeout(levelUp,700);
 }}
 else{
    h2.innerHTML = (`Game Over!! Your score was ${level-1} <br> Press enter to start again`);
    let body = document.querySelector("body");
    body.classList.add("loss");
    setTimeout(() => {
        body.classList.remove("loss");
    }, 150);
    reset();
 }

}
function btnPress(){
    console.log("btnPress function");
    // console.log(this);
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id")
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

    let allBtn = document.querySelectorAll(".boxes");
    for(btn of allBtn){
     btn.addEventListener("click",btnPress); // mere click krne se saare function ek ke baad ek work krna start ho jayenge
    }

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}