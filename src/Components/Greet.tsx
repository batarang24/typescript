type Greetprops={
    name:string
}

export const Greet=(props:Greetprops)=>{
    return (
        <div>
           {props.name} Hello World from Greet
        </div>
    );

}