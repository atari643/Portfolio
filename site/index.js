var projet = document.querySelector(".projet");
var javaButton = document.querySelector("#Java")
var detail = document.querySelector(".page.detail");
function javaProjet(){
    projet.innerHTML+="<button class='first'><img src='./javaImage/odomo.png'></button>"
    projet.innerHTML+="<button><img src='./javaImage/odomo.png'></button>"
    projet.innerHTML+="<button><img src='./javaImage/odomo.png'></button>"
    var allbutton= document.querySelectorAll(".projet button")
    for(var i=0;i<allbutton.length;i++){
        allbutton[i].addEventListener('click',zoom)
    }
    
    

}
javaButton.addEventListener('click',javaProjet)
function zoom(){
    detail.style.visibility = "visible";
}

