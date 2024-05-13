import React from "react";
import Comment from "./components/Comment";

function App(){
    return(
        <>
            <h1>Comentários</h1>
            <Comment title= "Vamos Aprender JSX" head="Title One" author=" Autor: Santos Raimundo"/>
            <Comment title= "Vamos Aprender JS" head="Title Two" author=" Autor: Manssanga Raimundo"/>
            <Comment title= "Vamos Aprender React" head="Title Three" author=" Autor: Benivaldo Raimundo"> </Comment>
        </>
    )
}
export default App;