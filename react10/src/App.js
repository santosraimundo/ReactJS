import React, { useState } from "react";

function App(){
    const[name, setName]= useState(() =>{
        return "Santos";
    })
    const[dadosPessoas, setDadosPessoas]=useState({
        Name: "Santos Raimundo", 
        idade: 32,
        Profissao: "DEV WEB",
        Peso: 73,
        Altura: 1.80
    });
    function inserirDados(){
        setDadosPessoas(alterarDados=>{
            return{...alterarDados,
                dadosPessoas: alterarDados.Name => alterarDados

            }
        })
    }
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
            <hr></hr>
            <ul>
                <li>Nome: {dadosPessoas.Name}</li>
            </ul>
            <button onClick={alteraNome}>Modificar Dados</button>

        </main>
    )
}
export default App;

// Modificar os valores de uma string e objectos com useState.