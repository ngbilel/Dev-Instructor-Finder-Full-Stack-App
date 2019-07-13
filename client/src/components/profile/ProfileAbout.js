import React from 'react'
import PropTypes from 'prop-types'


const ProfileAbout = ({
    profile :{
        bio,
        skills,
        user:{
            name
        }
    }
}) =>  {

   let skillsUpperCase= Object.values(skills).map(skill => skill.toUpperCase());

   return (
        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">{name.toUpperCase()}'s Bio</h2>
          <p>
            {bio} 
          </p>
          <div class="line"></div>
          <h2 class="text-primary">Skill Set</h2>
          
          <div class="skills">
            <div class="p-1"><i class="fa fa-check"></i> { skillsUpperCase }</div>
          </div>
        </div>
    )
}

ProfileAbout.propTypes= {
    profile:PropTypes.object.isRequired
}

export default ProfileAbout