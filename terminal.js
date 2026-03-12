// ADVANCED TERMINAL SYSTEM

const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

// command history
let history = [];
let historyIndex = -1;


// PRINT TEXT WITH OPTIONAL TYPING EFFECT
function printToTerminal(text, typing=false){

    const line = document.createElement("div");
    terminalOutput.appendChild(line);

    if(!typing){
        line.textContent = text;
    }else{
        let i = 0;
        const interval = setInterval(()=>{

            line.textContent += text.charAt(i);
            i++;

            if(i >= text.length){
                clearInterval(interval);
            }

        },10);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}



// TERMINAL COMMAND EXECUTION
function executeCommand(cmd){

cmd = cmd.toLowerCase();

switch(cmd){

case "help":

printToTerminal("Available commands:");
printToTerminal("-------------------");
printToTerminal("help  - show command list");
printToTerminal("scan  - scan network");
printToTerminal("ip    - show IP address");
printToTerminal("ai    - AI assistant");
printToTerminal("db    - open database");
printToTerminal("hack  - launch attack simulation");
printToTerminal("clear - clear terminal");

break;



case "scan":

printToTerminal("Scanning network nodes...", true);

setTimeout(()=>{
printToTerminal("Node01  - online");
printToTerminal("Node02  - online");
printToTerminal("Node03  - online");
printToTerminal("Node04  - online");
printToTerminal("Node05  - online");
printToTerminal("Node06  - online");
printToTerminal("Node07  - online");
},1200);

break;



case "ip":

const ip =
"192.168." +
Math.floor(Math.random()*255) +
"." +
Math.floor(Math.random()*255);

printToTerminal("Current IP: " + ip);

break;



case "ai":

if(typeof aiChat === "function"){
aiChat();
}else{
printToTerminal("AI module not loaded.");
}

break;



case "db":

if(typeof loadDatabase === "function"){
loadDatabase();
}else{
printToTerminal("Database module not loaded.");
}

break;



case "hack":

if(typeof launchAttack === "function"){
launchAttack();
}else{
printToTerminal("Attack engine not loaded.");
}

break;



case "clear":

terminalOutput.innerHTML = "";
break;



case "whoami":

printToTerminal("root@cyber-command");

break;



case "about":

printToTerminal("Cyber Command Center Terminal");
printToTerminal("Simulation environment for cybersecurity UI.");

break;



default:

printToTerminal("Unknown command. Type 'help'.");

}

}



// TERMINAL INPUT HANDLER
terminalInput.addEventListener("keydown",function(e){

// ENTER KEY
if(e.key === "Enter"){

const cmd = terminalInput.value.trim();

if(cmd !== ""){

printToTerminal(">> " + cmd);

history.push(cmd);
historyIndex = history.length;

executeCommand(cmd);

}

terminalInput.value = "";

}



// COMMAND HISTORY UP
if(e.key === "ArrowUp"){

if(historyIndex > 0){
historyIndex--;
terminalInput.value = history[historyIndex];
}

}



// COMMAND HISTORY DOWN
if(e.key === "ArrowDown"){

if(historyIndex < history.length-1){
historyIndex++;
terminalInput.value = history[historyIndex];
}else{
terminalInput.value = "";
}

}

});



// WELCOME MESSAGE
window.addEventListener("load",()=>{

printToTerminal("Cyber Command Center Terminal");
printToTerminal("Type 'help' to see available commands");

});
