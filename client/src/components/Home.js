import React, { useEffect, useRef, useState } from 'react'
import {gsap, Power3} from 'gsap'

const Home = () => {


  let heading = useRef()
  let heading2 = useRef()
  // const[show, setShow] = useState(false)
  useEffect(()=>{
    // setShow(true)
    console.log(heading)
    gsap.to(heading.current,2,{
      duration: 2,

      opacity: 1,
      ease: Power3.easeInOut
     
    })

    

    gsap.to(heading2.current,2,{
      duration: 2,
      delay: 0.8,
      opacity: 1,
      ease: Power3.easeInOut
     
    })
  },[])


 
  return (
    <div className='text-center pt-[10.0rem] font-bold'>
      <h1 ref={heading} className='text-white text-6xl pt-8 pb-8 opacity-0'>
      <span >WELCOME TO</span>
      </h1>
      <h1 ref={heading2}  className='text-white text-9xl opacity-0'>SOCIAL KEEP</h1>
    </div>
  )
}

export default Home
