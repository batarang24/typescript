import { time } from "console";
import { useEffect, useRef, useState } from "react"

export const Ref=()=>{
    const inputref=useRef<HTMLInputElement>(null);
    const [timers,stimer]=useState(0)
    const interavalref=useRef<number|null>(null)
    const stoptimer= ()=>{
       if( interavalref.current ) window.clearInterval(interavalref.current) 
    }
    useEffect(()=>{
        console.log('hello')
        inputref.current?.focus()
        
        interavalref.current= window.setInterval(()=>{
            stimer(
              (value)=>value+1 
            )
            
          
        },1000)
    },[])



    return (
      <>
      <h1>{timers}</h1>
          <input type="text" ref={inputref}/>
        <button onClick={()=>stoptimer}>clear</button>
      </>
    )
}