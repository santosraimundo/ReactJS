import React, { useState } from "react";

function FormaCorrecta(){
    const [valor, setValor]= useState(20)
    function aumentar(){
            setValor(valor => valor +20);
           
    }
    function diminuir(){
        setValor(valor => valor -20);
        
    }
    return(
        <section>
            <h1>Hooks useState learning more</h1>
           
            <button onClick={aumentar}>Aumentar</button>
            <span>  Valor =  {valor}   </span>
            <button onClick={diminuir}>Diniminuir</button>
        </section>
    )
}
export default FormaCorrecta;