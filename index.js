document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('flipping-logo');

    function flipLogo() {
        logo.style.transform = 'scaleX(-1)';
        setTimeout(() => {
            logo.style.transform = 'scaleX(1)';
        }, 500); // Adjust the time for the flip animation
    }

    // Call the flipLogo function at regular intervals
    setInterval(flipLogo, 1000); // Adjust the interval between flips
});

var tl = gsap.timeline()

tl.from("#page1", {
    y: -1700,
    duration: 1,
    delay: 0.2,
    scale: 0,
    rotate: 660,
})
tl.from("#navi", {
    y: 200,
    duration: 0.5,
    stagger: 0.5,
    rotate: 360,
    opacity: 0,
})
tl.from(".a", {
    y: 200,
    duration: 0.5,
    stagger: 0.3,
    rotate: 3360,
    opacity: 0,
})

tl.from("#meta", {
    y: 200,
    duration: 0.9,
    scale: -1.5,
    opacity: 0,
})

tl.from("#last-line-image", {
    x: 200,
    duration: 0.5,
    stagger: 0.3,
    rotate: 360,
    opacity: 0,
})

gsap.from("#page-two-things", {
    y: 200,
    opacity: 0,
    // rotate: 660,
    scrollTrigger: {
        trigger: "#page-two-things",
        Scroller: "body",
        // markers: true,
        scrub: 2,
        start: "top 80%",
        end: "top 60%"
    }
})


gsap.from("#page-two-things1", {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page-two-things1",
        Scroller: "body",
        // markers: true,
        scrub: 2,
        start: "top 80%",
        end: "top 60%"
    }
})