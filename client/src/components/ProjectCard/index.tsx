import { Project } from '@/state/api'
import React from 'react'

type Props = {
    project: Project
}

const ProjectCard = ({
    project
}: Props) => {
  return (
    <div className='rounded border p-4 shadow'>
        <h3>
            {project.name}
        </h3>
        <p>{project.description}</p>
        <p>Data de inicio: {project.startDate}</p>
        <p>Data de Vencimento: {project.endDate}</p>

    </div>
  )
}

export default ProjectCard