import React from "react";
import ComponentAll from "./component/ComponentAll";

const App = ()=>{
    return(
        
            <>
                <ComponentAll title="Courses of Web Developer Front-End">
                    <ol>
                        <li>HTML5 E CSS3</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                    </ol>
                </ComponentAll>
                <ComponentAll title="Courses of Web Developer Back-End">
                 <ol>
                        <li>MySQL</li>
                        <li>PHP</li>
                        <li>C#</li>
                    </ol>
                </ComponentAll>
            </>
        
    )
}
export default App;