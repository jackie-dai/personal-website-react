import "./experience.css"

function Experience(props) {
    return (
        <div id="experience-container">
            <div id="left">
                <div id="img-container">
                    <img src={props.img}></img>
                </div>
                <div id="text-container">
                    <h3>{props.company}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
            <div id="right">
                <div>
                    <p>{props.location}</p>
                </div>
            </div>
        </div>
    )
} export default Experience;