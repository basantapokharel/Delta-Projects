let btn=document.querySelector('button');
btn.addEventListener("click",function()
{
    console.log("generate random color");
    let h3=document.querySelector('h3');
    h3.innerText=getrandomcolor();
    console.log("color updated");
    let div=document.querySelector('div');
    div.style.backgroundColor=getrandomcolor();
});

function getrandomcolor()
{
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    let color=`rgb(${red},${green},${blue})`;
    return color;

}


