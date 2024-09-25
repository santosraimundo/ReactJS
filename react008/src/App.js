import React, {useState} from "react";


   
function App(){
    const [valor, setValor] = useState(0);
    //var valor = 0
    function incrementar(){
        setValor(valor +1)
    }

    return(
        <>
            <h1>React Hooks</h1>
            <h2>Valor = {valor}</h2>
            <button onClick={incrementar}>Incrementa</button>
        </>
    )
}
export default App;