import { useState } from "react";

function App() {
    const [valor, setValor]= useState(0); 
    function incremento(){
        setValor(valor + 1);
        
    }
    return(
        <>
            <h1>Welcome to my React Hooks 2024</h1>
            <form action="actio.php">
                 <p> Contar = {valor}</p>
                 <button onClick={incremento}>Incrementar</button>
            </form>
        </>
    )
}
export default App;