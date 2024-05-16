import React from "react";

function QualityReact(props){
    return(
        <div>
        <header class="head">
            <h1>{props.title}</h1>
        </header>
        <main class="container">
            <aside>
                <p>{props.paragraphy}</p>
            </aside>
        </main>
        </div>
    )
}
export default QualityReact;