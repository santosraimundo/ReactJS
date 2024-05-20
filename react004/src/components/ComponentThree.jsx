import React from "react";
//using arrow function

    const ComponentThree = (props) =>{
        return(
           <div className="component">
                <h3>Título3: {props.title}</h3>
                <p>Subtitulo: {props.subtitle}</p>
        </div> 
        )
    }
    export default ComponentThree;


//Nota: sempre que queremos fazer um comentário dentro do arquivo JSX devemos fazer da seguinte maneira => {/* <p>helo</> */}.


/*export default  (props) =>{
    return(
        <div className="component">
            <h3>Titulo: {props.title}</h3>
            <p>Component with shorthand of arrow function to React Js</p>
        </div>
    )
}
*/

