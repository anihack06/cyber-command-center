// CYBER ATTACK MAP USING LEAFLET

const map = L.map('worldMap').setView([20,0],2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:18
}).addTo(map);


// example attack locations
const locations = [
{country:"USA",lat:37.0902,lon:-95.7129},
{country:"Russia",lat:61.5240,lon:105.3188},
{country:"China",lat:35.8617,lon:104.1954},
{country:"India",lat:20.5937,lon:78.9629},
{country:"Germany",lat:51.1657,lon:10.4515},
{country:"Brazil",lat:-14.2350,lon:-51.9253},
{country:"Japan",lat:36.2048,lon:138.2529}
];


// simulate cyber attacks
function simulateAttack(){

const source = locations[Math.floor(Math.random()*locations.length)];
const target = locations[Math.floor(Math.random()*locations.length)];

if(source === target) return;


// source marker
const sourceMarker = L.circle([source.lat,source.lon],{
color:"red",
radius:200000
}).addTo(map);


// target marker
const targetMarker = L.circle([target.lat,target.lon],{
color:"lime",
radius:200000
}).addTo(map);


// attack line
const attackLine = L.polyline([
[source.lat,source.lon],
[target.lat,target.lon]
],{
color:"red",
weight:2,
opacity:0.8
}).addTo(map);


// remove after few seconds
setTimeout(()=>{

map.removeLayer(sourceMarker);
map.removeLayer(targetMarker);
map.removeLayer(attackLine);

},4000);

}


// run attack simulation
setInterval(simulateAttack,2000);
