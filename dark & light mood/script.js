const body=document.body;
const btn=document.querySelector(".btn");
// console.log(btn);
function colormood(){
    if(body.classList.contains("color")){
        body.classList.remove("color");
        body.classList.add("color1");
        btn.textContent="light mood";
    }else{
        body.classList.remove("color1");
        body.classList.add("color");
        btn.textContent="Dark mood";
        
    }
}
btn.addEventListener("click", colormood);
