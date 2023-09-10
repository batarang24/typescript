import { useState } from "react"

export const Usestatedemo=()=>{
    const [stater,sstater]=useState(true);
    function handlestater() {
       sstater(false)
    }
    return (
        <div>
            <h1>Hello {stater}</h1>
            <button onClick={handlestater}>Changer</button>
        </div>
    )

}
