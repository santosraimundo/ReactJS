import React, {useState} from "react";

function ComponentAll(){

        const [nome, setNome]= useState(10);
        function mostra(){
            setNome(nome + 20)
        }
    

                
           

    

    return(
        <main>
            <h1>Programming with React Hooks is very nice!</h1>
            <p>O valor vai de {nome}</p>
            <button onClick={mostra}>Começa a contar</button>
            
        </main>
    )
}
export default ComponentAll;