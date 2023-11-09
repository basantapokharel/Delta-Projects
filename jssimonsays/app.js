let gameColor=[];
let userColor=[];
let arr=["red","yellow","green","purple"];
let level=0;
let idx=-1;
let started=false;
let h2=document.querySelector('h2');
let btns=document.querySelectorAll('.btn');

document.addEventListener("keypress",function()
{
    if(!started)
    {
        console.log("Game started");
        started=true;
        levelUp();
       
    }
    

});

function gameBlink(ranColor)
{
    
    gameColor.push(ranColor);
    console.log(gameColor);
    let btn=document.querySelector(`.${ranColor}`);
    btn.classList.add('blink');
  
    setTimeout(() => {
        btn.classList.remove('blink');
    }, 250);
 

}
function userBlink(btnadr)
{
    
  userColor.push(btnadr.getAttribute('id'));
    console.log("User clicked")
    btnadr.classList.add('userblink');
   
    setTimeout(() => {
        btnadr.classList.remove('userblink');
    }, 250);


    
  
    
}
function check()
{   
    
    userBlink(this);
    idx++;
 
    if(idx<=gameColor.length-1)
    {

         if(gameColor[idx]==userColor[idx])
        {
            if(gameColor.length==userColor.length)
            {
                userColor=[];
                idx=-1;
                levelUp();
            }

        }
        else{
          h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any Key to continue`;
          document.querySelector('body').style.backgroundColor="red";
          setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
          },150)
            gameColor=[];
            userColor=[];
            level=0;
            idx=-1;
            started=false;

        }
    }
       
    
}
function selectRan()
{

    let ranNum=Math.floor(Math.random()*4);
    let ranColor=arr[ranNum];
    return ranColor;

}
function levelUp()
{
    
    level++;
    h2.innerText=`Level ${level}`;
    gameBlink(selectRan());

}
for (btn of btns)
{
    btn.addEventListener("click",check);
}