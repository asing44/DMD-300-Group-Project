// -------------------- INIT -------------------- //

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.config({
    autoSleep: 60,
});

ScrollTrigger.normalizeScroll(true);

var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;
console.log("Viewport height: " + viewportHeight, "Viewport width: " + viewportWidth);

window.addEventListener("resize", () => {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
})

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

// -------------------- COLOR CONTRAST -------------------- //

let content = gsap.utils.toArray(".CC-wrap");

content.forEach((item, index) => {
    let tl = gsap.timeline({
        delay: 1,
        stagger: 0.2,
        defaults: {
            duration: 2,
            ease: "power3.out"
        },
        scrollTrigger: {
            trigger: ".color-contrast-container",
        },
        ease: "ease.out"
    });
    gsap.set(item, {
        y: -500
    })
    tl.to(item, {
        y: 0,
    })
})

// -------------------- SECTION CHANGES -------------------- //

const sectionChanges = gsap.utils.toArray(".section-change-wrapper");

sectionChanges.forEach((item) => {
    let sectionWrapper = item.parentElement;
    let tl = gsap.timeline({
    });
    tl.to(item, {
        x: -500,
        scrollTrigger: {
            trigger: sectionWrapper,
            scrub: 1,
            ease: "power2.inOut"
        }
    })
});

// -------------------- BACK TO TOP -------------------- //

const backToTop = document.getElementsByClassName("back-to-top-wrapper")[0];

gsap.to(backToTop, {
    duration: 0.5,
    opacity: "100%",
    scrollTrigger: {
        trigger: ".introduciton",
        scrub: 1,
        ease: "power2.inOut"
    }
});

backToTop.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: 0,
        ease: "power3.out",
    });
});

