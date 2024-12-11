import React, {useState, useEffect} from "react";
import User from "./components/User";


function App(){

    //useEffect and useState
    const [users, setUsers]= useState([]);
    

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(json => {console.log(json.users)
            setUsers(json.users)
        })
        
    }, [])

    return(
        <main>
          <h1>Welcome to React Hooks</h1>
        {users.map(user => {
            return <User key={user.id} usuario={user}></User>
        })}
        </main>
    )
}
export default App;