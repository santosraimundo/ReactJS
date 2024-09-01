import React  from "react";



function ComponentB(props){
    const apresentar=()=>{
        return(
            props.funcao=("Number: " + Math.random())
            
        )
    }
    return(
        <section>
            <p>Título: {props.title}</p>
            <button onClick={apresentar}>Executar</button>
        </section>
    )
}
export default ComponentB;