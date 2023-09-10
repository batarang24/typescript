type ParentNodeProps={
    children:React.ReactNode
}

export const ParentNode=(props:ParentNodeProps)=>{
    return(
        <div>
            {props.children}
        </div>
    );
}