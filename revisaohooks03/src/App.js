import React, {useState} from "react";

function App (){
    const [valor, setValor]= useState(0)
    function acrescentar(){
        setValor(v_old => v_old +50)
        
    }
    
    function retirar(){
        setValor(old => old -30);
        
    }
    return(
        <>
        <h1>Come to see the hooks state</h1>
        <h2>The right way to write React Hooks useState</h2>
        <button onClick={acrescentar}>Acrescentar</button>
        <span> Valor: {valor} </span>
        <button onClick={retirar}>Retirar</button>
        </>
    )
}

export default App;