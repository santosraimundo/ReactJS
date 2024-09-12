function cond(props){
    if(props.condicional){
        return props.children
    }else{
        return false;
    }
}
export default cond;