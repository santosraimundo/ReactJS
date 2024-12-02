import React from "react";

function User(props){
    <>
        <div>
        Nome: <strong>{props.user.firstName} </strong>
        </div>
    </>
}
export default User;