import React, { useEffect, useRef, useState } from 'react';


function MotionIntro() {


  const parallaxBoxes = useRef([]);
  const [section, setSection] = useState(1);
  const [titleMotion, setTitleMotion] = useState('')


  useEffect(() => {

    const parallaxBoxLength = parallaxBoxes.current.length;

    const scrollEffect = () => {
      const scrollHeight = window.scrollY;

      // Parallax effect
      parallaxBoxes.current.forEach((box, index) => {
        if (box) {
          box.style.transform = `perspective(100px) translate3d(0,0,${
            scrollHeight / (2 * (parallaxBoxLength - index))

          }px)`;
        }
        let scale = parseInt((scrollHeight / (2 * (parallaxBoxLength - index))) / 3);
        console.log(scale)
        if(scale <= 20){
          console.log('1구간')
          setSection(1)
        }else if(scale > 20 && scale <= 100){
          console.log('2구간')
          setSection(2)
        }else{
          console.log('3구간')
       
          setSection(3)
        }
        
        
      });


    };

    window.addEventListener('scroll', scrollEffect);

    return () => {
      window.removeEventListener('scroll', scrollEffect);
    };


  }, []);

  useEffect(() => {
    if (section === 3) {
      setTitleMotion('active');
    }
  }, [section]); // section이 변경될 때마다 실행

  return (
    <section className="intro">
      <div className="main-effect">
        <div className="main-parallax">
          <div className="box mainTitle" >
            <h2>
            
            {
              section === 1 &&
              <span className={`scale-up-disappear ${titleMotion}`}> Please scroll down ... <small>|</small></span>
            }
            {
              section === 2 &&
              <span className={`scale-up-disappear ${titleMotion}`} > Hello ! Welcome to My Portfolio . </span>
            }
            {
              
              section === 3 &&  
              (
                <>

                  <span className={`last scale-up-disappear ${titleMotion}`}>I'm Jumi </span>
                </>
              )
            }               
      
                
            </h2>
          </div>

          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="box"
              ref={(el) => (parallaxBoxes.current[index] = el)}
            ></div>
          ))}



         
        </div>
      </div>
    </section>
  );
}

export default MotionIntro;