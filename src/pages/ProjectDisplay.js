import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();

    return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name.id}></img>
      <p><b>Skills:</b> {project.skills}</p>
      <button onClick={() => navigate(-1)}>Back here!</button>
    </div>
  )
}

export default ProjectDisplay