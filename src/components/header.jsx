import React , {useRef , useEffect} from 'react'

// import './header.css'

import { DiCss3 , DiJavascript , DiPython , DiJava , DiPhp } from 'react-icons/di';
import { AiFillHtml5  } from "react-icons/ai";
import { FaReact } from "react-icons/fa";



export default function header({ timeline , ease }) {
    let logo = useRef(null);
    let title = useRef(null);
    
    useEffect(() => {
        timeline.from(
            logo, 2, {
                opacity: 0,
                // repeat:2,
                // yoyo: true,
                y: '100',
            });
        timeline.from(
            [title], 2 ,{
                opacity: 0,
                y: -200,
                stagger: {
                    amount: .4
                },
                ease: ease
        })
    })
     
    return (
    <div className="header">
        <div className="logo">
            <div ref = {el => logo = el}>
                <FaReact className='iconLogo'/>
            </div>
            <h1 className='text-2xl font-Poppins capitalize font-light-
            text-cyber-easth-light_steel_blue text-center w-screen '
            ref = {el => title = el}>
                FortFolio
            </h1> 
        </div>
    </div>
  )
}
