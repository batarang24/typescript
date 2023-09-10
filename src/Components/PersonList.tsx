type PersonListprops={
    names:{
        firstname:string,
        lastname:string
    }[]
}

export const PersonList=(props:PersonListprops)=>{
    return(
       <div>
        {props.names.map(name=>{
            return(
                <h1>{name.firstname}{name.lastname}</h1>
            )
        })}
       </div>
    );
}