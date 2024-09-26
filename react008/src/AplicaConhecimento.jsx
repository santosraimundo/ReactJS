import React, {useState} from "react";

export default function AplicaConhecimento(){
    const [pessoa, setNome] = useState({nome: "Santos", apelido: "Raimundo", profissao:"Programador Web", idade: 32});


        

    return(
        <section>
            <h1>
                Aplicar o conhecimento Adquirido com os Hooks
            </h1>
            <ul><li>{pessoa.nome}</li></ul>
            <ul><li>{pessoa.apelido}</li></ul>
            <ul><li>{pessoa.profissao}</li></ul>
            <ul><li>{pessoa.idade}</li></ul>

        </section>
    )
}