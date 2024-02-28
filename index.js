function random(){
    return Math.floor(Math.random()*6)+1;
}


let head=document.querySelector(".head-text")
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let dice1=document.querySelector(".dice1");
let dice2=document.querySelector(".dice2");


// playing Section 

function round(){
    let play1=Math.floor(Math.random()*6)+1;
    let play2=Math.floor(Math.random()*6)+1;
    let pic1="./images/dice"+play1+".png";
    let pic2="./images/dice"+play2+".png";
    dice1.setAttribute("href",pic1);
    dice2.setAttribute("href",pic2);
    dice1.setAttribute("src",pic1);
    dice2.setAttribute("src",pic2);

    if(play1>play2){
        head.innerHTML="<span>🚩Player 1 Won</span>";
        dice1.setAttribute("src",pic1);
    }else if(play1<play2){
        head.innerHTML="<span>Player 2 Won🚩</span>";
        dice2.setAttribute("src",pic2);
    }else{
        head.innerHTML="<span>It's a Tie🤝🏾</span>";
    }
    dice1Click=false;
    dice2Click=false;
}

// animation section 

function removeAnimation(className){
    let element=document.querySelector("."+className);
    element.classList.remove("animate");
}

// Click Section 

let dice1Click=false;
let dice2Click=false;

btn1.addEventListener("click",()=>{
    dice1Click=true;
    if(dice2Click===false){
        head.innerHTML="<span>Player 2</span> It is Your Turn";
        dice1.classList.add("animate");
    }else{
        dice1.classList.add("animate");
        setTimeout(()=>{
            dice1.classList.remove("animate");
            dice2.classList.remove("animate");
        },1500);
        setTimeout(round,1500);
    }
})

btn2.addEventListener("click",()=>{
    dice2Click=true;
    if(dice1Click===false){
        head.innerHTML="<span>Player 1</span> It is Your Turn";
        dice2.classList.add("animate");
    }else{
        dice2.classList.add("animate");
        setTimeout(()=>{
            dice1.classList.remove("animate");
            dice2.classList.remove("animate");
        },1500);
        setTimeout(round,1500);
        
    }
})


// KeyPress Section 

document.addEventListener("keypress",(event)=>{
    if(event.key==="a"){
        btn1.click();
    }else if(event.key==="l"){
        btn2.click();
    }else{
        alert("Press Only The Appropriate Keys...😁")
    }
})