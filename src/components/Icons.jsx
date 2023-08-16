import React from 'react'

export default function Icons({ timeline , ease}) {
  return (
    <div className='flex w-1/2 h-full'>
        <AiFillHtml5    className='icons1 text-cyber-easth-light_steel_blue ease-out hover:text-silver hover:ease-in duration-300' / >
        <DiCss3         className='icons2 text-cyber-easth-light_steel_blue ease-out hover:text-tahiti hover:ease-in duration-300' / >
        <DiJavascript   className='icons3 text-cyber-easth-light_steel_blue ease-out hover:text-white hover:ease-linear duration-300' / >
    </div>    
  )
}
