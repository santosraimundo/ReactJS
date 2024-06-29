import React from "react";

function ComponentSeven(props){
    const comparar = ()=>{
        if(props.valor >=10){
            return <p>O valor é igual à 10 ou maior.</p>
        }else{
            return <p>O valor é inferior que 10</p>
        }
    }
    return(
        <div className="component">
            <h2>Título: {props.title}</h2>
            <p>Subtítulo: {props.subtitle}</p>
            {comparar()}
        </div>
    )
}
export default ComponentSeven;