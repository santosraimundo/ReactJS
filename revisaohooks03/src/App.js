import React, {useState} from "react";

function App (){
    const [valor, setValor]= useState(0)
    const [color, setColor]= useState(()=>{
        return "Yellow";
    });
    const [rentaCar, setRentaCar]=useState({
        carModelo: "Elentra",
        marcaCar: "Huyindai",
        carColour: "Preto",
        paisOrigen: "Correa",
        anoFabrico: 2024
    })
    function acrescentar(){
        setValor(v_old => v_old +50)
        
    }
    
    function retirar(){
        setValor(old => old -30);
        
    }
    function changeColor(){
        setColor(seeA =>     
            {
            return "Blue";
        });
       
    }
    function modifyRentaCar(){
        setRentaCar(trocar=>{
            return{...trocar,
                carModelo: "Suziki Expresso",
                anoFabrico: 2025,
                marcaCar: "Suziki",
                paisOrigen: "Japão"
            }
        })
    }
    return(
        <>
        <h1>Come to see the hooks state</h1>
        <h2>The right way to write React Hooks useState</h2>
        <button onClick={acrescentar}>Acrescentar</button>
        <span> Valor: {valor} </span>
        <button onClick={retirar}>Retirar</button><br />
        <button onClick={changeColor}>Mostra Cor</button>
        <h1> The color is: {color}</h1>
        <hr></hr>
        <h2>Mostra o modelo do da Renta Car</h2>
        <article>
            <button onClick={modifyRentaCar}>Apresenta Car</button>
            <ul>
                <li>Modelo do Carro: {rentaCar.carModelo}</li>
                <li>Cor do Carro: {rentaCar.carColour}</li>
                <li>Marca do Carro: {rentaCar.marcaCar}</li>
                <li>Pais de Origem: {rentaCar.paisOrigen}</li>
                <li>Ano que foi Fabricado: {rentaCar.anoFabrico}</li>
            </ul>
        </article>
        </>
    )
}

export default App;