// KEYBOARD SHORTCUTS

document.addEventListener("keydown", function(e) {


// CTRL + L → clear terminal
if (e.ctrlKey && e.key.toLowerCase() === "l") {

e.preventDefault();

const terminal = document.getElementById("terminalOutput");

terminal.innerHTML = "";

printToTerminal("Terminal cleared (CTRL + L)");

}


// CTRL + H → show help
if (e.ctrlKey && e.key.toLowerCase() === "h") {

e.preventDefault();

printToTerminal("Keyboard shortcuts:");
printToTerminal("------------------");
printToTerminal("CTRL + L  → Clear terminal");
printToTerminal("CTRL + H  → Show help");
printToTerminal("CTRL + M  → Update cyber map");
printToTerminal("CTRL + S  → Search database");

}


// CTRL + M → update cyber map
if (e.ctrlKey && e.key.toLowerCase() === "m") {

e.preventDefault();

if (typeof simulateAttack === "function") {

simulateAttack();

printToTerminal("Cyber map updated (CTRL + M)");

}

}


// CTRL + S → search database
if (e.ctrlKey && e.key.toLowerCase() === "s") {

e.preventDefault();

const query = prompt("Search database:");

if (query) {

if (typeof searchDatabase === "function") {

searchDatabase(query);

}

}

}


});
