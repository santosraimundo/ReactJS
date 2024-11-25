import React, {useState, useEffect} from "react";

function App(){
    const [familyMembers, setFamily]= useState({
        name0: "Santos Raimundo",
        name1: "Jorgina Raimundo",
        name2: "Benivaldo Raimundo",
        name3: "Janilda Raimundo",
        name4: "Baruk Raimundo"
    })
    function alteraName(){
        setFamily(modify =>{
                return{...modify,
                    name4: "Levi Raimundo"
                }
        })
    }
    useEffect(()=>{
        console.log("Foi Alterado")

    }, [])
    return(
        <>
            <header>
                <h1>How we can use the useEffect</h1>
            </header>
            <main>
                <ul>
                    <li>First Name: {familyMembers.name0}</li>
                    <li>Second Name: {familyMembers.name1}</li>
                    <li>Third Name: {familyMembers.name2}</li>
                    <li>Fourth Name: {familyMembers.name3}</li>
                    <li>Fiveth Name: {familyMembers.name4}</li>
                </ul>
                <button onClick={alteraName}>Modicar Nome</button>
            </main>
        </>
    )
}
export default App;