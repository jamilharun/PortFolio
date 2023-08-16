import React , {useRef , useEffect} from 'react'

export default function into({ timeline }) {

    let name = useRef(null);
    let bar = useRef(null);
    let message = useRef(null);
    let highligh = useRef(null);

    useEffect(()=> {
        timeline.from([name,bar,message,highligh],1,{
            opacity: 0,
            y: "100",
            skewY: 10,
            stagger: {
                amount: .4
            },            
        },"-=1")
    })

    return (
    <div className=' w-1/2 h-full text-cyber-easth-light_steel_blue 
        font-Handjet  ' >                
            <h1 className='name pl-24' rel={el => name = el}>JAMIL <br /> HARUN</h1>
            <hr className='w-52 ml-24' rel={el => bar = el}/>
            <h2 className='message pl-24' rel={el => message = el}>Hard work and <br/> Persivereance</h2>
            <h2 className='message highligh pl-24 hover:text-cyber-easth-deap_Lilac 
            ease-out hover:ease-in duration-300' rel={el => highligh = el}>SUCCESS</h2>
    </div >
  )
}
