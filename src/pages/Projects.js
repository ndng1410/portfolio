import React, { useEffect } from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import "../styles/Project.css"

function Projects() {
    return (
        <div className='projects'>
            <h1 style={{margin: "0"}}>My personal projects</h1>
            <div className='projectList'>
                {ProjectList.map((project, idx) => {
                    return <ProjectItem id={idx} name={project.name} image={project.image} />
                })}
            </div>
        </div>
    )
}

export default Projects