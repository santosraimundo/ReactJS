import React from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import ComponentFour from "./components/ComponentFour";
import ComponentFive from "./components/ComponentFive";
import ComponentSix from "./components/ComponentSix";
import ComponentSeven from "./components/ComponentSeven";
import ComponentEight from "./components/ComponentEight";
import ComponentNine from "./components/ComponetNine";
import ComponentFather from "./components/comunicação _direita/ComponentFather";

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
            <ComponentSix title = "Component Six" subtitle="Component Six with conditional" valor = {true}/>
            <ComponentSeven title="Component Seven" subtitle="Component Seven with new method of condicional" valor ={10} diasSemana={1}/>
            <ComponentEight title= "Component Eight" subtitle="Component Eight with third method of condicional." valor= "Isaac"></ComponentEight>
            <ComponentNine title="Component Nine" subtitle="Component Nine are leaning us how we can make the inline style to JSX"></ComponentNine>
            <ComponentFather title="Comunicação Direita"></ComponentFather>

            

            
        </>
    )
}
export default App;