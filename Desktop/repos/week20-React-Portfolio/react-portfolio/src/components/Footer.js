import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
const Footer = () => {
  return (
    <div className="footer">
      <div className='socialMedia'>
      <LinkedInIcon />
      <GithubIcon />
      <EmailIcon />
      </div>
     
    </div>
  )
}

export default Footer