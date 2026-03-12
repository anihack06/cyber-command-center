// CYBER AI ASSISTANT

function aiChat(){

const responses = {

status: [
"AI: System integrity verified.",
"AI: All security modules operational.",
"AI: Firewall active. No breaches detected.",
"AI: Network nodes stable."
],

threat: [
"AI: Suspicious traffic detected on Node03.",
"AI: Possible intrusion attempt blocked.",
"AI: Malware signature detected and quarantined.",
"AI: Unauthorized packet sequence intercepted."
],

analysis: [
"AI: Running security diagnostics...",
"AI: Analyzing network traffic patterns...",
"AI: Reviewing system logs...",
"AI: Checking encryption protocols..."
],

performance: [
"AI: CPU load within optimal range.",
"AI: Memory usage stable.",
"AI: Network throughput normal.",
"AI: System latency minimal."
]

};


// choose response category
const categories = Object.keys(responses);

const randomCategory =
categories[Math.floor(Math.random()*categories.length)];

const messageList = responses[randomCategory];

const message =
messageList[Math.floor(Math.random()*messageList.length)];


// simulate thinking
printToTerminal("AI: Processing request...");

setTimeout(()=>{

printToTerminal(message);

},800);

}



// AI SYSTEM SCAN
function aiSystemScan(){

printToTerminal("AI: Initiating deep system scan...");

const steps = [

"Scanning firewall configuration...",
"Analyzing open ports...",
"Reviewing authentication logs...",
"Checking encrypted channels...",
"Monitoring network packets..."

];

let index = 0;

const interval = setInterval(()=>{

printToTerminal("AI: " + steps[index]);

index++;

if(index >= steps.length){

clearInterval(interval);

setTimeout(()=>{
printToTerminal("AI: Scan complete. No critical threats detected.");
},800);

}

},700);

}



// AI THREAT DETECTOR
function aiThreatDetection(){

const threats = [

"AI ALERT: Possible brute-force attack detected.",
"AI ALERT: Suspicious login attempt blocked.",
"AI ALERT: Network anomaly detected.",
"AI ALERT: Potential phishing traffic identified."

];

const threat =
threats[Math.floor(Math.random()*threats.length)];

printToTerminal(threat);

}



// AI COMMAND ANALYZER
function aiAnalyzeCommand(cmd){

printToTerminal("AI: Analyzing command -> " + cmd);

setTimeout(()=>{

printToTerminal("AI: Command classified as system operation.");

},600);

}
