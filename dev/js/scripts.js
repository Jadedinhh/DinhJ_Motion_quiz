import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Jade Dinh"
document.querySelector("#name").innerHTML = yourName;

//GreenSock Timeline

const firstTL = gsap.timeline();

firstTL.from(".graph", {duration:1, opacity:0.25}, "box")
.from(".red", {duration:1, x:0, ease:"power1.inOut"}, "box")
.from(".blue", {duration:1, x:350,  ease:"power1.inOut"}, "box");


const first2TL = gsap.timeline({delay:2});
first2TL.to(".red", {duration:2, y:0, ease:"power1.out", rotate: 360},"box")
.to(".blue", {duration:2, y:300, ease:"power1.out", rotate:360}, "box");

gsap.from(".green", {duration:5, transformOrigin: "0 100%"});
