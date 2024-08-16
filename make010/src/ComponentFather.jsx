import React from "react";
import ComponentChildren from "./ComponentChildren";

function ComponentFather(props){

    return(
        <div className="father">
            <h1 className="title">Título: {props.title}</h1>
            <p>Pai:</p>
        </div>
    )

}
export default ComponentFather;