import React, {useEffect,Fragment} from 'react'
import PropTypes from 'prop-types'
import   {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import  {getProfileById} from '../../actions/profile'
import {Link} from 'react-router-dom'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'

const Profile = ({getProfileById, profile: {profile, loading}, auth ,match}) => {
    useEffect(()=> {
        getProfileById(match.params.id);
    },[getProfileById,match.params.id])

    return (
        <Fragment>
            {profile === null  || loading ? <Spinner/> : 
            <Fragment>
                <Link to='/profiles' className='btn btn-light'>
                    Back To Profiles
                </Link>
                 {auth.isAuthenticated && auth.loading === false && auth.user._id=== profile.user._id && 
                 <Link to='/edit-profile' className='btn btn-dark'> Edit Profile</Link>}
                 <div>
                     <ProfileTop profile={profile}/>
                 </div>
                 <div>
                     <ProfileAbout profile={profile}/>
                 </div>
                 <div class="profile-exp bg-white p-2">
                    <h2 class="text-primary">Experience</h2>
                     {   profile.experience.length > 0 ? (
                         profile.experience.map(exp => (<ProfileExperience key={exp._id} experience={exp}/>) )
                         ) : ( <h4>No experience credentials </h4>)
                     }
                     
                 </div>
                 <div class="profile-exp bg-white p-2">
                    <h2 class="text-primary">Education</h2>
                     {   profile.education.length > 0 ? (
                         profile.education.map(edu => (<ProfileEducation key={edu._id} education={edu}/>) )
                         ) : ( <h4>No Education credentials </h4>)
                     }
                     
                 </div>
                 
            </Fragment>
             }
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    auth:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile:state.profile,
    auth:state.auth

})

export default connect (mapStateToProps,{getProfileById}) (Profile)