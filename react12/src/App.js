import React, {useState, useEffect} from "react";

const App= ()=>{
    const clientes=["Santos", "Manssanga", "Benivaldo"];
    const produtos =["Pão", "Manteiga", "Leite"];
    const vendas = ["1 X Pão (Santos)", "2 X Manteiga (Manssanga)", "3 x Leite (Benivaldo)" ];

    const [info, setInfo]= useState(()=>{
        return "Clientes";
    })
    useEffect(()=>{
        console.clear();
        switch(info){
            case "clientes":
            console.table(clientes)
            break;
            case "produtos":
            console.table(produtos)
            break;
            case "vendas":
            console.table(vendas)
            
            
        }
            
    }, [info])
    return(
        <>
        <header>
            <h1>Use React Hooks useEffect with more detail </h1>
        </header>
        <hr></hr>
        <button onClick={()=>setInfo("clientes")}>Clientes</button>
        <button onClick={()=>setInfo("produtos")}>Produtos</button>
        <button onClick={()=>setInfo("vendas")}>Venda</button>
        <h2>{info}</h2>
        </>
    )

}
export default App;