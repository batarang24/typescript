import { useReducer } from "react"

const init={
    no:0

}
type Countstate={
    no:number
}
type Countaction={
   type:string
}

function reducer(state:Countstate,action:Countaction){
    switch (action.type) {
        case 'increase':
            return{
                no:state.no+1
            }
            
        case 'decrease':
            return{
                no:state.no-1
            }
        default:
            return state
    }
}

export const Reducer=()=>{
   

    const [state,dispatch]=useReducer(reducer,init);

    return (
        <div>
            <h1>{state.no}</h1>
            <button onClick={()=>dispatch({type:'increase'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrease'})}>Decrement</button>
        </div>
    )
}