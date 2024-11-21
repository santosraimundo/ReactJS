import React, { useState } from "react";

function App(){
    const[name, setName]= useState(() =>{
        return "Santos";
    })
    function alteraNome(){
        setName(nameOld =>{
            return "Benivaldo"

        })
    }
    return(
        <main>
            <h1>Modificar os valores de uma string e objectos com useState.</h1>
            <h2>Nome: {name}</h2>
            <button onClick={alteraNome}>Alterar Nome</button>
        </main>
    )
}
export default App;

// Modificar os valores de uma string e objectos com useState.