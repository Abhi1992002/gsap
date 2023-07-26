import './style.css'

gsap.registerPlugin(ScrollTrigger);

const headerTimeline = gsap.timeline()

headerTimeline.from('nav',{
    y:'-120px',
    opacity:0,
    duration:1
})
.from('.content h1',{
    x:-100,
    opacity:0,
    duraion:1,
    stagger:0.3
})
.from('.haveImage div',{
    scale:0,
    duration:0.5,
    opacity:0,
    stagger:0.1
})
.from('.hero-image',{
    scale:0,
    duration:0.5
}) 

//Section Animation
gsap.from('section div',{
    y:300,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:'section',
        start:'40% bottom',
        end:'+500px +500px',
        scrub:2
    }
})