import React  from "react";
import "./Comment.css";
function Comment(props){
    let number = 125469;
    function Maiuculas(texto){
        return(
            texto.toUpperCase()
        )
    }
    return(
        <>
            <section className="comment">
                <h1 className="title">{Maiuculas(props.title)}</h1>
                <h3 className="title2">{props.head}</h3>
                <h6 className="author">{props.author}</h6>
                <h4>{number}</h4>
            </section>
        </>
    )
}
export default Comment;