gsap.to(".mh1", {
    xPercent:-200,
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"top top",
        end:"bottom -200%"


    }
})

gsap.to(".mh2", {
    xPercent:-200,
    stagger:0.3,
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"90% top",
        end:"bottom -200%"


    }
})
gsap.to(".forward", {
    x:-1000,
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"top top",
        end:"bottom -200%"


    }
})

gsap.to(".mainBottle", {
    yPercent:-150,
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"120% top",
        end:"bottom -200%"


    }
})
gsap.to(".leaf1", {
    yPercent:-300,
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"top top",
        end:"bottom -200%"


    }
})
gsap.to(".bgImage", {
    scale:2,
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"top top",
        end:"bottom -200%"


    }
})
gsap.from(".grape1", {
    xPercent:-100,
    scrollTrigger:{
        trigger:".ml",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"-30% top",
        end:"bottom -20%"
    }
})
gsap.from(".barrel1", {
    xPercent:100,
    scrollTrigger:{
        trigger:".ml",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"-30% top",
        end:"bottom -20%"
    }
})

gsap.from(".page2Text", {
    yPercent:400,
    opacity:0,
    scrollTrigger:{
        trigger:".ml",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"-30% top",
        end:"50% top"
    }
})
gsap.from(".winesButton", {
    yPercent:400,
    opacity:0,
    scrollTrigger:{
        trigger:".ml",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"-30% top",
        end:"50% top"
    }
})

gsap.from(".card", {
    yPercent:300,
    rotate:45,
    scale:0.5,
    
    scrollTrigger:{
        trigger:".page2",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"top top",
        end:"bottom top"
    }
})

gsap.from(".wineBottlel,.wineBottler", {
    yPercent:300,
    rotate:45,
    scale:0.5,
    
    scrollTrigger:{
        trigger:".page2",
        scroller: "body",
        markers:true,
        scrub:2,
        start:"top top",
        end:"bottom top"
    }
})
gsap.from(".wineBottlec", {
    yPercent:100,
    rotate:45,
    scale:0.5,
    
    scrollTrigger:{
        trigger:".page2",
        scroller: "body",
        // markers:true,
        scrub:2,
        start:"top top",
        end:"90% top"
    }
})