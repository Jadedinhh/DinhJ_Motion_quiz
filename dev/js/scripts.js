import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Jade Dinh"
document.querySelector("#name").innerHTML = yourName;

//GreenSock Timeline

const firstTL = gsap.timeline();

firstTL.from(".graph", {duration:2, opacity:0.25}, "box")
.from(".red", {duration:1, x:0}, "box")
.from(".blue", {duration:1, x:350}, "box");


const first2TL = gsap.timeline({delay:2});
first2TL.to(".red", {duration:2, y:0, ease:"power1.out"},"box")
.to(".blue", {duration:2, y:300, ease:"power1.out"}, "box");


