import React from 'react'
import { AiOutlineUser, AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FaArtstation } from "react-icons/fa";
import Bio from './Biography';


function intHeader() {
  return (
    <section 
    // reminder add gradient animation
      className='custom-section bg-gradient-to-r from-cyber-easth-palatinate_Purple
     via-cyber-easth-deap_Lilac  to-cyber-easth-light_steel_blue '>
      <header className='main-header grid  place-items-center w-screen h-screen'>
          <div className='profile-card flex p-4 bg-cyber-easth-light_steel_blue rounded-xl
           hover:shadow-cyber-easth-midnight_express shadow-lg ease-out hover:ease-in duration-300 
           border-cyber-easth-deap_Lilac border-4 border-double'
            onClick={openingBio}
          >
              <div className='w-1/2 max-h-screen '>
                  <img className='w-1/2 max-h-screen' src="" alt="" />
              </div>
              <div className='w-1/2 max-h-screen flex flex-col '>
                  <h1 className='text-xl font-bold '>Jamil Harun Linzag</h1>
                  <h2 className='text-xl font-semibold my-4 text-center'>Free Lance Dev</h2>
                  <div className='grid grid-cols-6 place-items-center h-full w-full ' >
                    <AiOutlineFacebook className='icons' />
                    <AiOutlineInstagram className='icons' />
                    <AiOutlineTwitter className='icons' />
                    <AiOutlineYoutube className='icons' />
                    <AiOutlineLinkedin className='icons' />
                    {/* <FaArtstation /> */}
                    
                  </div>
              </div>
          {/* <div className='flex flex-col '></div> */}
          </div>
      </header>
      <Bio></Bio>
    </section>
  )
}


function openingBio(){
  let bio = document.querySelector('.bio');
  bio.style.display = "block"
}


export default intHeader