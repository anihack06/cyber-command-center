// CYBER PARTICLE BACKGROUND

const particleCanvas = document.createElement("canvas");
particleCanvas.id = "particlesCanvas";

document.body.appendChild(particleCanvas);

const ctx = particleCanvas.getContext("2d");

particleCanvas.style.position = "fixed";
particleCanvas.style.top = "0";
particleCanvas.style.left = "0";
particleCanvas.style.width = "100%";
particleCanvas.style.height = "100%";
particleCanvas.style.zIndex = "-2";

particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;


// PARTICLE SETTINGS
const particles = [];
const particleCount = 80;


// CREATE PARTICLES
for(let i = 0; i < particleCount; i++){

particles.push({
x: Math.random() * particleCanvas.width,
y: Math.random() * particleCanvas.height,
speedX: (Math.random() - 0.5) * 0.5,
speedY: (Math.random() - 0.5) * 0.5,
size: Math.random() * 2
});

}


// DRAW PARTICLES
function drawParticles(){

ctx.clearRect(0,0,particleCanvas.width,particleCanvas.height);

ctx.fillStyle = "#00ff9c";

particles.forEach(p => {

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

p.x += p.speedX;
p.y += p.speedY;


// screen wrapping
if(p.x < 0) p.x = particleCanvas.width;
if(p.x > particleCanvas.width) p.x = 0;

if(p.y < 0) p.y = particleCanvas.height;
if(p.y > particleCanvas.height) p.y = 0;

});

requestAnimationFrame(drawParticles);

}


// START ANIMATION
drawParticles();


// HANDLE RESIZE
window.addEventListener("resize",()=>{

particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

});
