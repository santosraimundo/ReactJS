import React  from "react";



function ComponentB(props){
    const apresentar=()=>{
        return(
            props.funcao("Number: " + Math.random(), "Name: " + "Santos")
            
        )
    }
    return(
        <section  style={{backgroundColor:"white", color:"black", width:"400px", height:"200px", margin:"30px", padding:"10px", fontWeight:"bold", fontSize:"1.5em"}}>
            <p>Título: {props.title}</p>
            <button onClick={apresentar}>Executar</button>
        </section>
    )
}
export default ComponentB;