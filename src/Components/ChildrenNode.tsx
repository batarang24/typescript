import { ChangeEvent } from "react";
import { Events } from "./Event";



export const ChildrenNode=()=>{
    return(
        <div>

            <Events clicker={(event) => { console.log(event); } } changer={function (e: ChangeEvent<HTMLInputElement>): void {
                console.log(e);
            } }/>
        </div>
    );
}