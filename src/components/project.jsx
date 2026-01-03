import "./project.css"

function Project(props) {
    return (
        <div id="project-container">
            <div id="img-container">
                <img src={props.img}></img>
            </div>
            <div id="text-container">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
} export default Project;