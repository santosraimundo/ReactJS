import React from "react";
import Condicao from "./ComponentCondicao";

const ComponentChildren = (props)=>{
    return(
        <div className="children" style = {{backgroundColor: "green"}}>
            <h1 className="title">Título: {props.title}</h1>
            <Condicao></Condicao>
        </div>
    )
}
export default ComponentChildren;