import React from "react";
import QualityReact from "./components/QualityReact.jsx"
import ComponentFather from "./components/ComponentFather.jsx";

function App(){
    return(
        <>
            <QualityReact title = "Programing with ReactJS is a Life" paragraphy ="Now we leaning React to developer our site and to grow up with my knowlodge." />
            <QualityReact title = "React is a good libraty from EcmaScript" paragraphy ="Come and see how most powerful ReactJS is, now I want to make difference and get my goals."/>
            <ComponentFather title="Aplicando Comunicação Direita e Estilo Inline " nome="Santos"></ComponentFather>
        </>
    )
}
export default App;