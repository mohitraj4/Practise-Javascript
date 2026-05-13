
let createContainer=document.createElement("div");
let buttonS=document.createElement("button");
createContainer.appendChild(buttonS);
createContainer.className='main-btn';
createContainer.style.backgroundColor="black";
createContainer.style.color="white";
createContainer.textContent="Get Data";
createContainer.style.width="10%";
createContainer.style.height="20px";
createContainer.style.borderRadius="5px"
createContainer.style.textAlign="center";
createContainer.style.cursor="pointer"
document.body.appendChild(createContainer);



let getDatas=async ()=>{
 let gettingData= await fetch(`https://dummyjson.com/products`)
 let response=await gettingData.json()
 console.log(response)

}

let select=document.querySelector(".main-btn");
select.addEventListener('click', getDatas);