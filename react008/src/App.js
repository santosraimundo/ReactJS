import React, {useState} from "react";
import AplicaConhecimento from "./AplicaConhecimento";


   
function App(){
    const [valor, setValor] = useState(0);
    //var valor = 0
    function incrementar(){
        setValor(valor +1)
    }
    function decremento(){
        setValor(valor -1);
    }

    return(
        <>
            <h1>React Hooks</h1>
            <h2>Valor = {valor}</h2>
            <button onClick={incrementar}>Incrementa</button> <br /> <br />
            <button onClick={decremento}>Decremento</button>
            <AplicaConhecimento/>
        </>
    )
}
export default App;