import { useState, useEffect } from "react";


const App = () =>{
    const marcaApple = {
        marca: "Apple",
        linha: "15 Pro Max",
        modelo: "Iphone",
        rom: "512 GB",
        ram: "12 GB",
        ano: 2024
    };
    const marcaSamsung = {
        marca: "Samsung",
        linha: "S",
        modelo: "Samsunga S24 Ultra",
        rom: "512 GB",
        ram: "12 GB",
        ano: 2024 
    }
    const [dadosPhone, setPhone]=(()=>{
        return "Dados dos Telemoveis";
    })
    return(
        <main>
            <header>
                <h1>Welcome to learn how we use React Hooks useState and useEffect</h1>
            </header>
            <section>
                <hr></hr>
            </section>
        </main>
    )
}
export default App;