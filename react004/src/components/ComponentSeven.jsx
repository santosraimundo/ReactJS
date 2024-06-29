import React from "react";

function ComponentSeven(props){
    const comparar = ()=>{
        if(props.valor >=10){
            return <p>O valor é igual à 10 ou maior.</p>
        }else{
            return <p>O valor é inferior que 10</p>
        }
    }
    const diasSemana = ()=>{
        switch (props.diasSemana) {
            case 0:
                return <p>O dia da Semana é ==Domingo==</p>
                
                break;
            case 1: 
                return <p>O dia da semana é ==Segunda-Feira==</p>    
        
            default:
                return <p>O valor inserido não satisfaz a escolha</p>
                break;
        }
    }
    return(
        <div className="component">
            <h2>Título: {props.title}</h2>
            <p>Subtítulo: {props.subtitle}</p>
            {comparar()}
            {diasSemana()}
        </div>
    )
}
export default ComponentSeven;