type Personprops={
    names:{
        firstname:string,
        lastname:string
    }
}


export const Person=(props:Personprops)=>{
    return(
        <div>My Name is {props.names.firstname} {props.names.lastname}</div>
    );
}