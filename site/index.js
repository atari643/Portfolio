var projet = document.querySelector(".projet");
var javaButton = document.querySelector("#Java")
javaButton.addEventListener('click',javaProjet())
function javaProjet(){
    projet.innerHTML+="<button class='first'><img src='./javaImage/odomo.png'></button>"
    projet.innerHTML+="<button><img src='./javaImage/odomo.png'></button>"
    projet.innerHTML+="<button><img src='./javaImage/odomo.png'></button>"

}
var allProjet = document.querySelector(".projet > button")
allProjet.addEventListener('click',()=>{
    allProjet.innerHTML="<button class='calc'></button>";
    var first = document.querySelector("button .calc");
    first.classList.add('first')
})