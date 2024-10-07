import { useState } from "react";

function RightWayHooks(props){
    const [members, serMembers]= useState({
        nome: "Santos",
        altura: 1.72,
        idade: 32,
        nacionalidade: "Angolana",
        provincia: "Malanje",
        profissao: "Dev-Web"
    });

    return(
        <section>
            <h1>Welcome to my ReactJS-Hooks</h1>
            <p style={{color: "blue", fontSize:"1.4em"}}>My name is {members.nome} iam {members.idade} and my proffision is {members.profissao}.</p>
        </section>
    )
}
export default RightWayHooks;