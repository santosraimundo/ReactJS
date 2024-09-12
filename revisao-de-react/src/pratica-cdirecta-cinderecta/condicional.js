function cond(props){
    if(props.codicao){
        return props.children
    }else{
        return false;
    }
}
export default cond;