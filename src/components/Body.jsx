import './Body.css'
import Projects from '../pages/Projects'
import Aboutme from '../pages/Aboutme'

export default function Body() {
    return (
        <div className="body-content">
            <Aboutme />
            <Projects />
        </div>
    )
}