import React from "react";
import ComponentChildren from "./Component.Children";

const ComponentFather = (props) =>{
    return(
        <div className="component">
            <p className="title">{props.title}</p>
            <p>Pai</p>
            <ComponentChildren ></ComponentChildren>
        </div>
    )
}
export default ComponentFather;