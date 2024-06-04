import React from "react";

function CollectionApp(props){
    return(
        <div className="container">
            <section className="collection">
                <h1>Título1: {props.title}</h1>
                <ul></ul>
            </section>
        </div>
    )
}
export default CollectionApp;


