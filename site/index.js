var text = document.querySelector(".title");
var splitText = text.innerText.split('');
var contact = document.querySelector(".scroll");
var all = document.querySelector("*");
i = 0;
text.innerHTML = ``;
var today = new Date();
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
window.addEventListener('load', ()=>{
    if(today.getHours()>17){
    text.innerText+='Bonsoir '
}else{
    text.innerText+='Bonjour '
}
})
window.addEventListener('resize', (e)=>{
    all.style.setProperty('--x', document.documentElement.scrollWidth+"px")
})
window.addEventListener('load', (e)=>{
    all.style.setProperty('--x', document.documentElement.scrollWidth+"px")
})
window.addEventListener('load',(e)=>{
     setInterval(()=>{
        if (i<splitText.length){
            text.innerHTML+=splitText[i];
            i++;
        }else if(i===splitText.length){
            text.innerHTML+=` Java`
            i++;
        }
        
    },100)
})
window.addEventListener('load', ()=>{
    contact.classList.add("left")
    
})
window.addEventListener('scroll', ()=>{
    contact.classList.remove("left")
    contact.classList.add("right")
})
