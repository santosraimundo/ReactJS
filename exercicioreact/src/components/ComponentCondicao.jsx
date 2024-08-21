import React from "react";

function Condicao (props){
    if(props.condicao){
        return props.children;
    }else{
        return false;
    }
}
export default Condicao;