import React from "react";


export default (props)=>{
    function demostra(){
        return(
            props.mostra("Nome: Santos" + "Apelido: Raimundo")
        )
    }
    return(
        <div>
            <h1>Son</h1>
            <p>{props.valor}</p>
            <button onClick={demostra}>Mostra</button>
        </div>
    )
}