import React from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import ComponentFour from "./components/ComponentFour";
import ComponentFive from "./components/ComponentFive";

function App(){
    return(
        <>
            <ComponentOne title="Componente One" subtitle="Componete mas simples de ReactJS"/>
            <ComponentTwo title="Component Two" subtitle="Component Two with Arrow function to ReactJs"/>
            <ComponentThree title="Component Three" subtitle="Component with shorthand of arrow function to React Js" />
            <ComponentFour title="Compenent Four" subtitle="Faça os seguintes cursos">
                <ul className="list">
                    <li>HTML5 E CSS3</li>
                    <li>JAVASCRIPT</li>
                    <li>ReactJS</li>
                    <li>BootStrap5</li>
                </ul>

            </ComponentFour>
            <ComponentFive title="Component Five" subtitle="Aplicando coleção no componente"/>

            
        </>
    )
}
export default App;