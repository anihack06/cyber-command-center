// DATABASE EXPLORER

const databasePanel = document.getElementById("databasePanel");


// SIMULATED DATABASE FILES
const fakeFiles = [

"admin_keys.json",
"password_hashes.txt",
"encrypted_logs.bin",
"vpn_connections.cfg",
"crypto_wallet.dat",
"user_credentials.db",
"network_dump.bin",
"system_backup.zip",
"firewall_rules.cfg",
"session_logs.log",
"intrusion_attempts.csv",
"security_patch_notes.md"

];


// LOAD DATABASE FILES
function loadDatabase(){

databasePanel.innerHTML = "";

fakeFiles.forEach(file => {

const fileDiv = document.createElement("div");

fileDiv.textContent = file;

fileDiv.classList.add("dbFile");


// hover effect
fileDiv.addEventListener("mouseenter",()=>{
fileDiv.style.backgroundColor = "rgba(0,255,156,0.2)";
});

fileDiv.addEventListener("mouseleave",()=>{
fileDiv.style.backgroundColor = "transparent";
});


// click event
fileDiv.addEventListener("click",()=>{

printToTerminal("Opening " + file + "...");

setTimeout(()=>{
printToTerminal(file + " opened successfully.");
},700);

});


databasePanel.appendChild(fileDiv);

});


printToTerminal("Database loaded: " + fakeFiles.length + " files found.");

}



// SEARCH DATABASE
function searchDatabase(query){

const results = fakeFiles.filter(file =>
file.toLowerCase().includes(query.toLowerCase())
);

databasePanel.innerHTML = "";

if(results.length === 0){

const empty = document.createElement("div");
empty.textContent = "No files found";

databasePanel.appendChild(empty);

}else{

results.forEach(file => {

const fileDiv = document.createElement("div");

fileDiv.textContent = file;

databasePanel.appendChild(fileDiv);

});

}

printToTerminal("Search results: " + results.length + " files found");

}
