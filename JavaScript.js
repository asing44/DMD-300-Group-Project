
// -------------------- HERO -------------------- //

const heroArrow = document.getElementsByClassName("hero-arrow")[0];

gsap.to(heroArrow, {
    keyframes: [{
        duration: 1,
        yPercent: -75,
        opacity: "0%",
        ease: "ease.in"
    },{
        duration: 2,
        yPercent: 0,
        opacity: "100%",
        ease: "power2"
    },{
        duration: 1,
        delay: -1,
        opacity: 0,
        ease: "power2.out"
    }],
    repeat: -1,
})