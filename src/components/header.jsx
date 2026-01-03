import './header.css'

function Header(props) {
    return (
        <div style={props.style} id="header-container">
            <div id="intro-container">
                <div id="left">
                    <img id="profile-pic" src="/profile.jpg"></img>
                    <div id="intro-text-container">
                        <p>Hey, I am</p>
                        <p style={{fontWeight: "bold", fontSize: "3rem"}}>Jackie Dai</p>
                        <p>A computer science major at UC Berkeley</p>
                    </div>
                </div>
                <div id="right">
                    <div id="links">
                        <a href="/Jackie_Dai_Resume_2025.pdf" target="_blank">Resume</a>
                        <a href="https://github.com/jackie-dai"  target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/jackie-dai/" target="_blank">Linkedin</a>
                    </div>
                </div>
            </div>
            <span></span>
        </div>
    )
} 
export default Header;