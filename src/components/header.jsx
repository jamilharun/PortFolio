import React from 'react'
import { DiCss3 , DiJavascript , DiPython , DiJava , DiPhp } from 'react-icons/di';
import { AiFillHtml5  } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

export default function header() {
  return (
    <div className='header w-full h-screen bg-gradient-to-r from-obsidian-black to-obsidian-black_russian'>
        <div className="absolute flex top-0 w-full bg-gradient-to-r from-obsidian-jagger  to-70% via-transparent">
            <div className="logo flex space-x-5 px-5 ">
                <FaReact className='text-2xl  text-cyber-easth-light_steel_blue '/>
                <h1 className='text-2xl font-Poppins capitalize font-light-
                text-cyber-easth-light_steel_blue '>
                    FortFolio
                </h1> 
            </div>
        </div>
        <div className='flex w-full h-screen'>
            <div className=' w-1/2 h-full text-cyber-easth-light_steel_blue 
            font-Handjet  ' >
                <h1 className='name pl-24'>JAMIL <br /> HARUN</h1>
                <hr className='w-52 ml-24'/>
                <h2 className='message pl-24'>Hard work and <br/> Persivereance</h2>
                <h2 className='message highligh pl-24 hover:text-cyber-easth-deap_Lilac 
                ease-out hover:ease-in duration-300'>SUCCESS</h2>
            </div >
            <div className='flex w-1/2 h-full'>
                <AiFillHtml5    className='icons1 text-cyber-easth-light_steel_blue ease-out hover:text-silver hover:ease-in duration-300' / >
                <DiCss3         className='icons2 text-cyber-easth-light_steel_blue ease-out hover:text-tahiti hover:ease-in duration-300' / >
                <DiJavascript   className='icons3 text-cyber-easth-light_steel_blue ease-out hover:text-white hover:ease-linear duration-300' / >
            </div>
        </div>
    </div>
  )
}
