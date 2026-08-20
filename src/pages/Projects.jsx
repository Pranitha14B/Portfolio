import './Projects.css'

export default function Projects() {
  return (
    <div className="page-content">
       

        <div className="projects">
            <div className="project">
                <h4>Shift Management System Prototype (React.js)</h4>
                <p>
                    Developed a responsive Shift Management System prototype using React.js, JavaScript, HTML, and CSS.
                    Built reusable React components to enable employees to opt in or opt out of available shifts with real-time status updates.
                    Implemented color-coded shift indicators and dynamic UI behaviour to improve user experience and visibility into shift availability.
                    Utilized React Hooks and component-based architecture to develop maintainable and scalable UI components.
                    Designed the application with future enhancements in mind, including database integration, notifications, and role-based access control.
                </p>
            </div>
            <div className="project">
                <h4>835 Error Reconciliation System</h4>
                <p>
                    Contributed to the development and enhancement of an enterprise Error Reconciliation application used for payment and claims processing.
                    Developed reusable UI components and implemented search, filtering, and bulk update functionalities to improve operational efficiency.
                    Integrated frontend screens with REST APIs to retrieve and display claim and payment data.
                    Collaborated with business users and QA teams to analyse requirements, resolve defects, and improve application usability.
                    Supported testing, production issue resolution, and ongoing application enhancements.
                </p>
            </div>
            <div className="project"> 
                <h4>Claims Screen Management & EDI Auto-Adjudication</h4>
                <p>
                    Developed and maintained healthcare claims processing applications on the GBAS/OpenVMS platform.
                    Worked on claims-related modules and implemented enhancements based on business requirements.
                    Developed functionality supporting duplicate claim detection and auto-adjudication workflows.
                    Collaborated with business and operations teams to deliver system enhancements and resolve production issues.
                    Prepared technical documentation and performed testing to ensure application reliability and accuracy.
                </p>
            </div>
        </div>
    </div>
    )
}
