// ADVANCED CYBER ATTACK SIMULATION ENGINE

function launchAttack(){

const attackBar = document.getElementById("attackBar");

let progress = 0;

printToTerminal("Initializing penetration testing module...");
printToTerminal("Target system locked.");


// attack stages
const stages = [

"Reconnaissance: gathering target information...",
"Scanning: detecting open ports...",
"Scanning: identifying running services...",
"Vulnerability analysis: searching exploit database...",
"Vulnerability detected: outdated SSH service.",
"Exploitation: launching payload...",
"Injecting remote shell...",
"Privilege escalation attempt...",
"Root access obtained.",
"Extracting sensitive data...",
"Establishing persistent backdoor..."

];

let stageIndex = 0;


// attack progress animation
const interval = setInterval(()=>{

progress++;

attackBar.style.width = progress + "%";


// show next stage
if(progress % 10 === 0 && stageIndex < stages.length){

printToTerminal(stages[stageIndex]);

stageIndex++;

}


// random cyber messages
if(progress % 15 === 0){

const randomMessages = [

"Bypassing firewall...",
"Encrypting communication channel...",
"Intercepting packets...",
"Deploying stealth payload...",
"Analyzing system architecture..."

];

const msg =
randomMessages[Math.floor(Math.random()*randomMessages.length)];

printToTerminal(msg);

}


// attack completed
if(progress >= 100){

clearInterval(interval);

printToTerminal("Attack complete.");
printToTerminal("Access granted to target system.");

attackBar.style.width = "0%";

}

},50);

}
