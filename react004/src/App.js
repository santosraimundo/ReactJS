import React from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
function App(){
    return(
        <>
            <ComponentOne/>
            <ComponentTwo />
            <ComponentThree title="Component Three" />

            
        </>
    )
}
export default App;