

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
const introSection = document.querySelector('.intro');
const textAppear = document.querySelector('.scale-up-appear');
const textDisAppear = document.querySelector('.scale-up-disappear');
const maintitle = document.querySelector('.mainTitle h2');
const maintitleWrapper = document.querySelector('.mainTitle');
const sectionBtn = document.querySelectorAll('.sectionBtn button');
const blinkObject = document.querySelector('.blink_zoom');
const decoBox = document.querySelector('.deco')
const line = document.querySelector('.line4');

introSection.style.height = heightSetting + 'px';

const parallaxBox = document.querySelectorAll('.box');
const parallaxBoxLength = parallaxBox.length;
const body = document.querySelector('body');

const txtSectionElements = document.querySelectorAll('[class^="txt-sec-"]');
const imgSectionElements = document.querySelectorAll('[class^="img-sec-"]');
const workSection = document.querySelector('.works');
const aboutSection = document.querySelector('.about');
const workSectionValue = workSection.getBoundingClientRect().bottom;
const aboutSectionValue = aboutSection.getBoundingClientRect().bottom;
const topSectionValue = workSectionValue+aboutSectionValue;
const windowHeight = window.innerHeight;

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

    let isImgSectionDetected = false; // 이미지 섹션을 감지했는지 여부를 저장하는 변수

    imgSectionElements.forEach((img, index) => {
        const imgSectionValue = img.getBoundingClientRect().bottom;

        if (imgSectionValue <= windowHeight) {
            const sectionNumber = img.classList[0].split('-')[2];
            body.setAttribute('id', `works-${sectionNumber}`); 
            isImgSectionDetected = true; 
        }
    });

    if (!isImgSectionDetected) {
        body.removeAttribute('id');
    }

    
});

$('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  });