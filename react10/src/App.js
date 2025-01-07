import React, { useState } from "react";

function App(){
    const[name, setName]= useState(() =>{
        return "Santos";
    })
    const[dadosPessoas, setDadosPessoas]=useState({
        personalName: "Benivaldo Raimundo", 
        idade: 32,
        Profissao: "DEV WEB",
        Peso: 73,
        Altura: 1.80
    });
    function inserirDados(){
        setDadosPessoas(alterarDados=>{
            return{
                personalName: "Baruk",
                Profissao: "Técnico de Redes de Computador",
                idade: 10
                

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
                <li>Nome: {dadosPessoas.personalName}</li>
                <li>Profisão: {dadosPessoas.Profissao}</li>
                <li>Idade: {dadosPessoas.idade} Anos</li>
            </ul>
            <button onClick={inserirDados}>Modificar Dados</button>

        </main>
    )
}
export default App;

// Modificar os valores de uma string e objectos com useState.