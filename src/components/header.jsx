import React from 'react'
import { DiCss3 , DiJavascript , DiPython , DiJava , DiPhp } from 'react-icons/di';
import { AiFillHtml5  } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

export default function header() {
  return (
    <div className='header w-full h-screen bg-gradient-to-r from-obsidian-black to-obsidian-black_russian'>
        <div className=" flex top-0 w-full bg-gradient-to-r from-obsidian-jagger  to-70% via-transparent">
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
                font-Handjet  px-32' >
                    <h1 className='name '>JAMIL HARUN</h1>
                    <hr className='w-40'/>
                    <h2 className='message'>Hard work and Persivereance</h2>
                    <h2 className='message'>SUCCESS</h2>
                </div >
                <div className='flex w-1/2 h-full'>
                    <AiFillHtml5    className='icons w-96 h-96 text-cyber-easth-light_steel_blue' / >
                    <DiCss3         className='icons w-96 h-96 text-cyber-easth-light_steel_blue' / >
                    <DiJavascript   className='icons w-96 h-96 text-cyber-easth-light_steel_blue' / >
                </div>
            </div>
    </div>
  )
}
