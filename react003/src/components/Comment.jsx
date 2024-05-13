import React  from "react";
import "./Comment.css";
function Comment(props){
    return(
        <>
            <section className="comment">
                <h1 className="title">{props.title}</h1>
                <h3 className="title2">{props.head}</h3>
                <h6 className="author">{props.author}</h6>
            </section>
        </>
    )
}
export default Comment;