

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

  
const ham = document.querySelector('.ham');
const header = document.querySelector('header')
const contact = document.querySelector('.contact')


ham.addEventListener('click', () => {
    ham.classList.toggle('on');
    header.classList.toggle('active');
});
// contact.addEventListener('click', () => {
//     contact.classList.toggle('active');
// });



const heightSetting = (window.innerHeight) * 4;
const mainSection = document.querySelector('main');
const textAppear = document.querySelector('.scale-up-appear');
const textDisAppear = document.querySelector('.scale-up-disappear');
const maintitle = document.querySelector('.mainTitle h2');
const maintitleWrapper = document.querySelector('.mainTitle');
const sectionBtn = document.querySelectorAll('.sectionBtn button');
const blinkObject = document.querySelector('.blink_zoom');
const decoBox = document.querySelector('.deco')
const line = document.querySelector('.line4');

mainSection.style.height = heightSetting + 'px';

const parallaxBox = document.querySelectorAll('.box');
const parallaxBoxLength = parallaxBox.length;
const body = document.querySelector('body');

window.addEventListener('scroll', () => {
    let scrollHeight = window.scrollY;

    if (scrollHeight < heightSetting) {
        blinkObject.style.display = "block"
        decoBox.style.display = "block"
        line.style.display = "block"
        parallaxBox.forEach((box, index) => {
            box.style.transform = `perspective(200px) translate3d(0,0,${
                scrollHeight / (2 * (parallaxBoxLength - index))
            }px)`;
        });

    }
    
    if (scrollHeight > (heightSetting / 2.5)) {
        textAppear.classList.add('active');
        textDisAppear.classList.add('active');
        maintitle.classList.add('active');
        maintitleWrapper.classList.remove('active')
        
        
        

    } else {
        textAppear.classList.remove('active');
        textDisAppear.classList.remove('active');
        maintitle.classList.remove('active');
       
       
    }

    if (scrollHeight > (heightSetting * 0.8)) {
        blinkObject.style.display = "none"
        decoBox.style.display = "none"
        line.style.display = "none"
        maintitleWrapper.classList.add('active')
   
    }

    
});