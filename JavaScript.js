// -------------------- INIT -------------------- //

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.config({
    trialWarn: false
});

var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;
console.log("Viewport height: " + viewportHeight, "Viewport width: " + viewportWidth);

function getScroll() {
    if (window.scrollY != undefined) {
        return [scrollX, scrollY];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

window.addEventListener("resize", () => {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
    ScrollTrigger.refresh();
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

let animatedButtons = gsap.utils.toArray(".animated-button");

animatedButtons.forEach((item, index) => {

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
});

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
            xPercent: 10,
            scrollTrigger: {
                trigger: sectionWrapper,
                scrub: 1.2,
                ease: "power2.inOut"
            }
        })
    } else {
        let tl = gsap.timeline({
        });
        gsap.set(item, {
            xPercent: 10
        });
        tl.to(item, {
            xPercent: -50,
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
    delay: 0.5,
    paused: true
})
.add(showModal())
.add(hideButton(), "<");

function hideButton() {
    let tl = gsap.timeline();
    tl.to("#interactive-content-button-wrap", {
        duration: 0.5,
        opacity: 0,
        ease: "ease.inOut"
    }).set("#interactive-content-button-wrap", {
        display: "none"
    });
    return tl;
}

function showModal() {
    let tl = gsap.timeline();
    tl.to(".interactive-content-container", {
        duration: 1,
        yPercent: -100,
        opacity: "100%",
        ease: "ease.inOut"
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

// -------------------- INTERACTIVE EXAMPLES BUTTONS -------------------- //

const interactiveButtonWrap = document.getElementById("interactive-content-button-wrap");
const interactiveButton = document.getElementsByClassName("example-button")[0];

// Color contrast example

let ccInteractive = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: "ease.inOut"
    },
    scrollTrigger: {
        trigger: "#CC",
        start: "top top",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        onEnterBack: function() {
            interactiveButton.id = "CC-example";
        },
        onLeave: function() {
            interactiveButton.id = "CI-example";
        }
    }
});

ccInteractive.fromTo(interactiveButtonWrap, {
    opacity: 0
}, {
    opacity: 1
});

// Color information example

let ciInteractive = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: "ease.inOut"
    },
    scrollTrigger: {
        trigger: "#CI",
        start: "top top",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        onEnterBack: function() {
            interactiveButton.id = "CI-example";
        },
        onLeave: function() {
            interactiveButton.id = "DE-example";
        }
    }
});

ciInteractive.fromTo(interactiveButtonWrap, {
    opacity: 0
}, {
    opacity: 1
});

// Color disability example

let cdInteractive = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: "ease.inOut"
    },
    scrollTrigger: {
        trigger: "#DE",
        start: "top top",
        end: "+=85% center",
        toggleActions: "play reverse play reverse",
    }
});

cdInteractive.fromTo(interactiveButtonWrap, {
    opacity: 0
}, {
    opacity: 1
});


// -------------------- BACK TO TOP -------------------- //

const backToTopButton = document.getElementsByClassName("back-to-top-wrapper")[0];

gsap.to(backToTopButton, {
    duration: 0.5,
    opacity: "100%",
    scrollTrigger: {
        trigger: ".introduciton",
        scrub: 1,
        ease: "power2.inOut"
    }
});

function scrollToTop() {
    gsap.to(window, {
        duration: 1,
        scrollTo: 0,
        ease: "power3.out",
    });
}

// -------------------- FOOTER -------------------- //



// -------------------- REFRESH -------------------- //

ScrollTrigger.refresh();