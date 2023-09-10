type Eventprops={
    clicker:(e:React.MouseEvent<HTMLButtonElement>)=>void
    changer:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export const Events=(props:Eventprops)=>{
    return(
        <div>
            <input onChange={props.changer}/>
            Hello <button onClick={props.clicker}>World</button>

        </div>
    );
}