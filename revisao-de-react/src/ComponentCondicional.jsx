import React from "react";

const ComponentCondicional=(props)=>{

        if(props.condicao){
            return props.children
        }else{
            return false
        }
}