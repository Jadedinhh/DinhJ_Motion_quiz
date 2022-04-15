import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Jade Dinh"
document.querySelector("#name").innerHTML = yourName;

//GreenSock Timeline

const secondTL = gsap.timeline();

secondTL.from(".red", {duration:1, x:0, ease:"power1.out"}, "box")
.from(".blue", {duration:1, x:350, ease:"power1.out"}, "box")
.from(".graph", {duration:2, opacity:0.5}, "box")
;


const second2TL = gsap.timeline({delay:1});
second2TL.to(".red", {duration:2, y:0, ease:"power1.out"},"box")
.to(".blue", {duration:2, y:300, ease:"power1.out"}, "box");


gsap.from(".green", {duration:4, transformOrigin:"left", scaleX:0});