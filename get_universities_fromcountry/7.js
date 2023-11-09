

// updating query strings

let url="http://universities.hipolabs.com/search?name=";
let country="nepal";
let btn=document.querySelector('button');
btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;

   let collArr=await getColleges(country);
   show(collArr);
});
function show(arr)
{
    let list=document.querySelector('#list');
    list.innerText="";
    for (a of arr)
    {
        let li=document.createElement('li');
        li.innerText=a.name; 
        list.appendChild(li);
        console.log(a.name);
    }
}

async function getColleges(country)
{
    try{
        let res=await axios.get(url + country);
        return res.data;
    }
    catch(err)
    {
        console.log("Error occured",err);
        return [];

    }
}
