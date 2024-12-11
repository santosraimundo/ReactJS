import React from "react"

function User(props){
    <>
        <div>
          Nome: <strong>{props.usuario.firstName} {props.usuario.lastName}</strong>
        </div>
    </>
}
export default User;