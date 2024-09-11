import React from "react";
import ComponentMother from "./ComponentMother";

function ComponentGrand(){
    return(
        <div>
            <h1>Grand Father</h1>
            <ComponentMother></ComponentMother>
        </div>
    )
}
export default ComponentGrand