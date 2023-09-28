// -------------------- INIT -------------------- //

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.config({
    trialWarn: false
});

console.clear();

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

// -------------------- TOPIC SECTIONS -------------------- //

let colorContrastContent = gsap.utils.toArray(".CC-wrap");

colorContrastContent.forEach((item, index) => {
    let tl = gsap.timeline({
        delay: 0.1,
        stagger: 0.1,
        defaults: {
            duration: 1.5,
            ease: "power3.inOut"
        },
        scrollTrigger: {
            trigger: ".color-contrast-container",
            once: true,
            start: "top top",
            end: "10% top"
        },
        ease: "power3.inOut"
    });
    gsap.set(item, {
        y: -550
    })
    tl.to(item, {
        y: 0,
    })
});

let colorInformationContent = gsap.utils.toArray(".CI-wrap");

colorInformationContent.forEach((item, index) => {
    let tl = gsap.timeline({
        delay: 0.1,
        stagger: 0.1,
        defaults: {
            duration: 1.5,
            ease: "power3.inOutt"
        },
        scrollTrigger: {
            trigger: ".color-information-container",
            once: true,
            start: "top top",
            end: "10% top"
        },
        ease: "power3.inOut"
    });
    gsap.set(item, {
        y: -700
    })
    tl.to(item, {
        y: 0,
    })
});

let disabilityExamplesContent = gsap.utils.toArray(".DE-wrap");

disabilityExamplesContent.forEach((item, index) => {
    let tl = gsap.timeline({
        delay: 0.1,
        stagger: 0.1,
        defaults: {
            duration: 1.5,
            ease: "power3.out"
        },
        scrollTrigger: {
            trigger: ".disability-examples-container",
            once: true,
            start: "top top",
            end: "10% top"
        },
        ease: "power3.inOut"
    });
    gsap.set(item, {
        yPercent: -100
    })
    tl.to(item, {
        yPercent: 0,
    })
});

// -------------------- LINKS -------------------- //



// -------------------- BUTTONS -------------------- //

let animatedElement = gsap.utils.toArray(".animated-hover");

animatedElement.forEach((item, index) => {
    let elementTextHover = item.children[0].children[0];
    let elementHover = item.children[1]
    
    let tl = gsap.timeline({
        paused: true,
        defaults: {
            duration: 0.25,
            ease: "power2.inOut"
        }
    }).to(elementHover, {
        xPercent: 100
    }).to(elementTextHover, {
        yPercent: -100
    }, "<50%")
    
    item.addEventListener("mouseover", function() {
        tl.play();
    });

    item.addEventListener("mouseout", function() {
        tl.reverse();
    });
})

// -------------------- SECTION CHANGES -------------------- //

const sectionChanges = gsap.utils.toArray(".section-change-wrapper");

sectionChanges.forEach((item) => {
    let sectionWrapper = item.parentElement;
    
    if (item.classList.contains("reverse")) {
        let tl = gsap.timeline({
        });
        gsap.set(item, {
            xPercent: -50
        });
        tl.to(item, {
            x: 500,
            scrollTrigger: {
                trigger: sectionWrapper,
                scrub: 1.2,
                ease: "power2.inOut"
            }
        })
    } else {
        let tl = gsap.timeline({
        });
        tl.to(item, {
            x: -500,
            scrollTrigger: {
                trigger: sectionWrapper,
                scrub: 1.2,
                ease: "power2.inOut"
            }
        })
    }
});

// -------------------- INTERACTIVE EXAMPLES -------------------- //

const codePenContent = document.getElementsByClassName("codepen-example");

let interactiveExample = gsap.timeline({
    delay: 1,
    paused: true
})
.add(showModal());

function showModal() {
    let tl = gsap.timeline();
    tl.to(".interactive-content-container", {
        duration: 1,
        yPercent: -100,
        opacity: "100%",
        ease: "power2.inOut"
    })
    return tl;
}

function exampleRequest(btn) {
    let selected = btn.id;
    for (let i = 0; i <= codePenContent.length - 1; i++) {
        if (codePenContent[i].id == selected) {
            codePenContent[i].classList.remove("codepen-inactive");
            codePenContent[i].classList.add("codepen-active");
        } else {
            codePenContent[i].classList.remove("codepen-active");
            codePenContent[i].classList.add("codepen-inactive");
        }
    }
    interactiveExample.play();
}

function exampleClose() {
    interactiveExample.reverse()
}

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

// -------------------- FOOTER -------------------- //



// -------------------- REFRESH -------------------- //

ScrollTrigger.refresh();