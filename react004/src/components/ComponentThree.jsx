import React from "react";
//using arrow function
export default  (props) =>{
    return(
        <div className="component">
            <h3>Titulo: {props.title}</h3>
            <p>Component with shorthand of arrow function to React Js</p>
        </div>
    )
}