var proton = document.querySelector("#proton .Balle");
var neutron = document.querySelector("#neutron .Balle");
var electron = document.querySelector("#electron .Balle");
var images = document.querySelector(".element");
var protons = [];
var neutrons = [];
var electrons = [];
var image = document.querySelector(".element");
var x = 300;
var y = 300;
var mul = 1;
var dia = 10;
proton.addEventListener('click', () => {
    var compteur = protons.length;
    if (compteur < 5) {
        if (compteur % 4 == 1) {
            droit();
        }
        if (compteur % 4 == 2) {
            haut();
        }
        if (compteur % 4 == 3) {
            gauche();
        }
        if (compteur % 4 == 0) {
            bas();
        }
        protons.push(new Balle(x, y, 'red'));
        if (compteur % 4 == 1) {
            gauche();
        }
        if (compteur % 4 == 2) {
            bas();
        }
        if (compteur % 4 == 3) {
            droit();
        }
        if (compteur % 4 == 0) {
            haut();
        }
    }
})
neutron.addEventListener('click', () => {
    var compteur = neutrons.length;
    if (compteur < 5) {
        if (compteur % 4 == 1) {
            droit();
        }
        if (compteur % 4 == 2) {
            haut();
        }
        if (compteur % 4 == 3) {
            gauche();
        }
        if (compteur % 4 == 0) {
            bas();
        }
        neutrons.push(new Balle(x, y, 'grey'));
        if (compteur % 4 == 1) {
            gauche();
        }
        if (compteur % 4 == 2) {
            bas();
        }
        if (compteur % 4 == 3) {
            droit();
        }
        if (compteur % 4 == 0) {
            haut();
        }
        
    }

electron.addEventListener('click', ()=>{
    if(random(0, 1)<0.5){
        electrons.push(new Balle(random(0, 200), random(0, 200), 'blue'))
    }else{
        electrons.push(new Balle(random(200, 600), random(200, 600), 'blue'))
    }
})

})
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.class("center");
    protons.push(new Balle(x, y, 'red'));
    if(random(0, 1)<0.5){
        electrons.push(new Balle(random(0, 200), random(0, 200), 'blue'))
    }else{
        electrons.push(new Balle(random(200, 600), random(200, 600), 'blue'))
    }
    var name = "<img src='./atome/protium.png' alt='protium'>";
    images.innerHTML+=name;

}
function droit() {
    x += dia;
}
function gauche() {
    x -= dia;
}
function haut() {
    y -= dia;
}
function bas() {
    y += dia;
}
function draw() {
    background(255);
    ellipseMode(CENTER);
    fill(255, 255, 255)
    ellipse(300, 300, 200, 200);
    for (var i = 0; i < protons.length; i++) {
        protons[i].display();
        
    }
    for (var i = 0; i < neutrons.length; i++) {
        neutrons[i].display();
        
    }
    for(var i = 0; i<electrons.length; i++){
        electrons[i].display();
        electrons[i].move();
    }
    check();
    

}
function check(){
    images = document.querySelector(".element img");
    if(protons.length==electrons.length){
        if(protons.length==1 && neutrons.length==1){
            images.src="./atome/Deuterium.png"
        }
        if(protons.length==1 && neutrons.length==2){
            images.src="./atome/Tritium.png"
        }
    }
}
