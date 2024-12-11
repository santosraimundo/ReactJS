import React, {useState, useEffect} from "react";
import User from "./components/User";


function App(){


    const [users, setUsers]= useState([]);
    //effect

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
            return<User key={user.id} user ={user}/>
        })}
        </main>
    )
}
export default App;