import { useState } from 'react'

// import Bio from './components/Biography'
// import Main from './components/intHeader'
// import Mainbody from './components/mainbody'

import Header from './components/header'
import Into from './components/into'    //typo hahaha  
import Icons from './components/Icons'  //wala ako maisip na name hahaha

import { gsap , Power3 } from 'gsap';

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <>
      <section >
        <div className='firstBox'>
          <Header timeline={tl} ease={ease} />        
          <div className='flex w-full h-screen'>
            {/* <Into timeline={tl} /> */}
            {/* <Icons timeline={tl} ease= {ease}/> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
