import React from "react";

function User(props){
    <>
        <div>
        Nome: <strong>{props.user.firstName} {props.user.lastName}</strong>
        </div>
    </>
}
export default User;