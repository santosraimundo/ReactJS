import React from "react";

function ComponentChildren (props){
    if(props.ComponentChildren){
        return props.children;
    }else{
        return false;
    }
}