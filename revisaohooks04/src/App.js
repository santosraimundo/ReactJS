import { useState, useEffect } from "react";


const App = () =>{
    const marcaApple = {
        marca: "Apple",
        linha: "15 Pro Max",
        modelo: "Iphone",
        rom: "512 GB",
        ram: "12 GB",
        ano: 2024
    }
    const marcaSamsung = {
        marca: "Samsung",
        linha: "S",
        modelo: "Samsung S24 Ultra",
        rom: "512 GB",
        ram: "12 GB",
        ano: 2024 
    }
    const [dadosPhone, setPhone]=useState(()=>{
        return "Dados dos Telemoveis"
    })
    useEffect (()=>{
        switch (dadosPhone) {
            case "marcaApple":
                console.table(marcaApple)
                break;
            case "marcaSamsung":
                 console.table(marcaSamsung)
                break;
        }
        
    }, [dadosPhone])
    return(
        <main>
            <header>
                <h1>Welcome to learn how we use React Hooks useState and useEffect</h1>
            </header>
            <section>
                <hr></hr>
                <button onClick={()=>setPhone("marcaApple")}>Apple</button>
            
                <button onClick={()=>setPhone("marcaSamsung")}>Samsung</button>
               
            </section>
        </main>
    )
}
export default App;