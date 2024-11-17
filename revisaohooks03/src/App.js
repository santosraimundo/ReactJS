import React, {useState} from "react";

function App (){
    const [valor, seValor]= useState(0)
    function acrescentar(){
        
    }
    return(
        <>
        <h1>Come to see the hooks state</h1>
        <h2>The right way to write React Hooks useState</h2>
        <button>Acrescentar</button>
        <span> Valor: {valor} </span>
        <button>Retirar</button>
        </>
    )
}

export default App;