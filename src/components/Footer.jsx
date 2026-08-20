import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import name from "../assets/name.svg";

import "./Footer.css";

export default function Footer() {
    return(
        <footer>
            <img className="logo" src={name} alt="Pranitha" />
            <div className="footer-right">
                <div className="services">
                    <span>Frontend Developer</span>
                    <span>UI/UX Developer</span>
                    <span>React.js Developer</span>
                </div>
                <div className="vertical"></div>
                <div className="socials">
                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                    <img src={gmail} alt="gmail" />
                </div>
            </div>
        </footer>
    )

}