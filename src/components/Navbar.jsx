import './Navbar.css'
import name from "../assets/name.svg";

function Navbar() {
  return (
    <nav>
      <img className="logo" src={name} alt="Pranitha" />

      <div className='links'>
        <span>Home</span>
        <span>Projects</span>
        <span>About Me</span>
        <span>Contact Me</span>
        <span>Resume </span>
      </div>
    </nav>
  )
}

export default Navbar