
let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');



btn.addEventListener("click",adder);
inp.addEventListener('keyup',function(event){

    if(event.code=='Enter'){

         adder();
    }

  
});


function adder()
{
    let li=document.createElement('li');
    li.innerText=inp.value;

    let btn2=document.createElement('button');
    btn2.innerText="Delete";
    btn2.style.marginLeft="10px";
    btn2.classList.add("delete");
    btn2.addEventListener("click",deletebtn);
    ul.insertAdjacentElement("beforeend",li);
    li.append(btn2);


    inp.value="";

}


function deletebtn()
{
    let li=this.parentElement;
    li.remove();
}