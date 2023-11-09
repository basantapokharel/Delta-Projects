
// for dog

let url="https://dog.ceo/api/breeds/image/random";
let button=document.querySelector('button');
let img=document.querySelector('#result');

async function getImage()
{
    try{
        let res=await axios.get(url);
        img.setAttribute('src',res.data.message);
        button.innerText="Another Image";
        }
    catch(err)
    {
        console.log("error occured",err);
    }
}
button.addEventListener("click",getImage );