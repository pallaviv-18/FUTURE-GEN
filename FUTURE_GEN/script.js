
/* ==========================
   FUTUREGEN SCRIPT.JS
========================== */

/* ==========================
   MOBILE MENU TOGGLE
========================== */

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", () => {
nav.classList.toggle("show");
});

/* ==========================
   COUNTER ANIMATION
========================== */

function animateCounter(id, target, speed) {
let count = 0;
let element = document.getElementById(id);

let interval = setInterval(() => {
count++;
element.innerText = count;

if (count >= target) {
clearInterval(interval);
}
}, speed);
}

/* Start Counters */
animateCounter("counter1", 120, 10);
animateCounter("counter2", 80, 15);
animateCounter("counter3", 150, 10);
animateCounter("counter4", 200, 8);

/* ==========================
   FACT GENERATOR (GLOBAL FIX)
========================== */

function generateFact() {

const facts = [
"AI can process data faster than humans.",
"Robots are used in space exploration.",
"Smart Cities reduce pollution using technology.",
"Renewable energy is the future of power.",
"Machine learning improves over time.",
"Automation increases productivity worldwide."
];

let random = Math.floor(Math.random() * facts.length);

document.getElementById("factText").innerText = facts[random];

}

/* ==========================
   CHATBOT (GLOBAL FIX)
========================== */

function chatBot() {

let input = document.getElementById("userQuestion").value.toLowerCase();
let output = document.getElementById("botReply");

if (input.includes("ai")) {
output.innerText = "AI helps machines think and learn like humans.";
}

else if (input.includes("robot")) {
output.innerText = "Robots perform tasks in industries and healthcare.";
}

else if (input.includes("smart")) {
output.innerText = "Smart Cities use IoT and AI for better living.";
}

else if (input.includes("energy")) {
output.innerText = "Green Energy comes from renewable sources like solar.";
}

else if (input.includes("hello")) {
output.innerText = "Hello! Welcome to FutureGen 👋";
}

else {
output.innerText = "Ask about AI, Robotics, Smart Cities or Energy.";
}

}

/* ==========================
   SMOOTH SCROLL FIX (optional)
========================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
});
});