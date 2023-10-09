const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0,
  yValue = 0;


window.addEventListener("mousemove", (e) => { 
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

 
    

  parallax_el.forEach(el => {
    let speedx = el.dataset.speedx; 
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;

    let elementCenterX = el.offsetLeft + el.offsetWidth / 2;
    let isInLeft = elementCenterX < window.innerWidth / 2 ? 1 : -1;
    let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1; 
    

    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
    translateY(calc(-50% + ${yValue * speedy * 0.4}px)) perspective(2300px) 
    translateZ(${zValue * speedz}px)
    `;

  }); 
});

if (window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.5}px`;  
} else { 
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}
 
/* GSAP ANIMATION*/

let timeline = gsap.timeline();

parallax_el.forEach(el => {
    timeline.from(
        el,
        {
        top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
        duration: 1,
    },
    "1"
    );    
})


 