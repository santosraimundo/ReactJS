import React from "react";


export default (props)=>{
    function demostra(){
        return(
            props.mostra("Nome: Santos"  +  " Apelido: Raimundo")
        )
    }
    return(
        <div>
            <h1>Son</h1>
            <p>Nome: {props.nome}</p>
            <button onClick={demostra}>Mostra</button>
        </div>
    )
}