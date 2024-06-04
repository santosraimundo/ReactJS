import React from "react";
import course_collection from "./course-collection";

const course = () =>{
    return course_collection.map(get_course =>{
        return(
            <li key={get_course.id_course}>Nome: {get_course.course_name}</li>
        )
    })
}


function CollectionApp(props){
    return(
        <div className="container">
            <section className="collection">
                <h1>Título1: {props.title}</h1>
                <ul>{course()}</ul>
            </section>

        </div>
    )
}
export default CollectionApp;


