import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ( {profile: {
    status,
     company,
     location,
     website,
     social,
     user: {name,avatar}
    }}) =>  {
    return  (
        <div class="profile-top bg-primary p-2">
        <img
          class="round-img my-1"
          src={avatar}
          alt=""
        />
        <h1 class="large">{name.toUpperCase()}</h1>
        <p class="lead">{status} at {company}</p>
        <p>{location}</p>

        <div class="icons my-1">
            {
                website && (
                    <a href={website} target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-globe fa-2x"></i> 
                    </a>
                )
            }
          
         
         
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
           <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>

    )
}


ProfileTop.propsTypes ={
    profile:PropTypes.object.isRequired
}
export default ProfileTop