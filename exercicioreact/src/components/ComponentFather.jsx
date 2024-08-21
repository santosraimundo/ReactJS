import React from "react";
import ComponentChildren from "./ComponentChildren";

const ComponentFather = (props)=>{
    return(
        <div className="father" style={{backgroundColor:"black"}}>
            <h1 className="title">Titulo: {props.title}</h1>
            
            <ComponentChildren title="Componente Filho">

            </ComponentChildren>

        </div>

    )

}
export default ComponentFather;