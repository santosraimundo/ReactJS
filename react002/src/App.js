import React from "react";
import Texto  from "./components/Texto";

function App(){
    return(
        <header>
            <h1>Vamos colocar componentes dentro de componentes</h1>
            <Texto />
            <Texto></Texto>
        </header>
        
        
    )
}
export default App;