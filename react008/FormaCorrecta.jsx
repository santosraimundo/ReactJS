import React, { useState } from "react";

function FormaCorrecta(){
    const [valor, setvalor]= useState(20)
    function aumentar(){

    }
    return(
        <section>
            <h1>Hooks useState learning more</h1>
            <span>Valor: {valor}</span>
            <button onClick="aumentar">Aumentar</button>
            <button onClick="diminuir">Diniminuir</button>
        </section>
    )
}
export default FormaCorrecta;