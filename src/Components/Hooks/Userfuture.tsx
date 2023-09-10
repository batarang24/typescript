import { useState } from "react";

type Authuser={
    fname:string,
    lname:string
}


export const Userfuture=()=>{
    const [user,suser]=useState<Authuser|null>(null)
    function changehandlerf(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        suser({
            
          fname:'Naren',
          lname:'Vasu'
            
        })
        console.log(user)
    }

    return(
        <div>
            <h1>Hi for everyone and {user?user.fname :''}{user?user.lname:''}</h1>
            <button onClick={(e)=>changehandlerf(e)}>Changer</button>
           
        </div>
    );
}