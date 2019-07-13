import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({
education :{
    school, degree, fieldofstudy,description ,current, to, from, 
}
}) => {
    return (
        
          <div>
          <h3 class="text-primary"> {school}</h3>
          <Moment format='YYYY/MM/DD'>{from}</Moment> - {' '}
          {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
          <p><strong>Degree: </strong>{degree}</p>
          <p><strong>Field Of Study: </strong>{fieldofstudy}</p>
          <p>
            <strong>Description: </strong> {description}
          </p>
        </div>
    )
}

ProfileEducation.propTypes=  {
    profile:PropTypes.object.isRequired
}

export default ProfileEducation