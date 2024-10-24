
// import './App.css';
import './main.scss'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import Header from './components/header'
import Footer from './components/footer'
import MotionIntro from './components/motion'
import { useState } from 'react'

function App() {



  return (
    <ReactLenis root>
      <div className="App">
        <Header></Header>
        <MotionIntro ></MotionIntro>
        <Footer></Footer>
      </div>
    </ReactLenis>
  );
}

export default App;
