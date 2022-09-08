import React, { useState } from 'react'
import Projects from './Projects'



const Portfolio = () => {
  const [projects]  = useState([
    {
      name: 'project 1',
      descripiton: 'blah',
      deployed: 'google.com', //link to project
      repo: 'github.com',
      image: 'design.jpeg',
    },
  ])
  return(
    <>
      <div>
        {projects.map(project => (
          <Projects project={project} 
          key={project.name}>

          </Projects>
        ))}
      </div>
    </>
  )
}

export default Portfolio

