// -------------------- INIT -------------------- //

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.config({
    trialWarn: false
});


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

let introductionContent = gsap.utils.toArray(".intro-animated");

let icTl = gsap.timeline({
    delay: 0.2,
    stagger: 0.1,
    defaults: {
        ease: "ease.inOut"
    },
    scrollTrigger: {
        trigger: ".introduction",
    },
    invalidateOnRefresh: true,
    ease: "ease.inOut"
});

introductionContent.forEach((item, index) => {
    icTl.fromTo(item, {
        yPercent: -20,
        opacity: 0
    }, {
        yPercent: 0,
        opacity: 1
    })
});

let colorContrastContent = gsap.utils.toArray(".CC-animated");

let ccTl = gsap.timeline({
    delay: 0.2,
    stagger: 0.1,
    defaults: {
        ease: "ease.inOut"
    },
    scrollTrigger: {
        trigger: ".color-contrast",
    },
    invalidateOnRefresh: true,
    ease: "ease.inOut"
});

colorContrastContent.forEach((item, index) => {
    ccTl.fromTo(item, {
        yPercent: -20,
        opacity: 0
    }, {
        yPercent: 0,
        opacity: 1
    })
});

let colorInformationContent = gsap.utils.toArray(".CI-animated");

let ciTl = gsap.timeline({
    delay: 0.2,
    stagger: 0.1,
    defaults: {
        ease: "ease.inOut"
    },
    scrollTrigger: {
        trigger: ".color-information",
    },
    invalidateOnRefresh: true,
    ease: "ease.inOut"
});

colorInformationContent.forEach((item, index) => {
    ciTl.fromTo(item, {
        yPercent: -20,
        opacity: 0
    }, {
        yPercent: 0,
        opacity: 1
    })
});

let disabilityExamplesContent = gsap.utils.toArray(".DE-animated");

let deTl = gsap.timeline({
    delay: 0.2,
    stagger: 0.1,
    defaults: {
        ease: "ease.inOut"
    },
    scrollTrigger: {
        trigger: ".disability-examples",
    },
    invalidateOnRefresh: true,
    ease: "ease.inOut"
});

disabilityExamplesContent.forEach((item, index) => {
    deTl.fromTo(item, {
        yPercent: -20,
        opacity: 0
    }, {
        yPercent: 0,
        opacity: 1
    })
});

// -------------------- LINKS -------------------- //



// -------------------- BUTTONS -------------------- //

let animatedButton = gsap.utils.toArray(".animated-button");
let buttonContainer = gsap.utils.toArray(".animated-button-container")

animatedButton.forEach((item, index) => {

    console.log(buttonContainer[index], item)

    let elementText = item.children[0].children[0];
    let element = item.children[1]
    
    let hoverTl = gsap.timeline({
        paused: true,
        defaults: {
            duration: 0.25,
            ease: "power2.inOut"
        }
    }).to(element, {
        xPercent: 100
    }).to(elementText, {
        yPercent: -100
    }, "<50%")
    
    item.addEventListener("mouseover", function() {
        hoverTl.play();
    });

    item.addEventListener("mouseout", function() {
        hoverTl.reverse();
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: buttonContainer[index],
            markers: true,
            pin: item,
            scrub: true,
            pinSpacing: false,
            start: "+=20% top",
        }
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