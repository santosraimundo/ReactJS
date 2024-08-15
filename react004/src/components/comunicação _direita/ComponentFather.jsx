import React from "react";
import ComponentChildren from "./Component.Children";

const ComponentFather = (props) =>{
    return(
        <div className="component">
            <p className="title">{}</p>
            <p>Pai</p>
        </div>
    )
}
export default ComponentFather;