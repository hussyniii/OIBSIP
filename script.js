// Smooth Scroll for Navigation Links

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

target.scrollIntoView({

behavior:'smooth'

});

});

});


// Active Navigation on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;
const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Simple Fade Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition="0.8s";

observer.observe(section);

});