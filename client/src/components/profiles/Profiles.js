import React, { Fragment, useEffect,useState
 } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';



const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {

  const  [filter,setFilter] = useState('no');

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  var search='';
    const handleChange = (e) => {
    search = e.target.value;
    setFilter(search)

  }



  return (

    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
                   
          <div class="Wrapper">
            <div class="large text-primary">Intructors Finder </div>
          <div class="Input">
            <input type="text" id="input" class="Input-text"  placeholder='React Js, Java, ...' onChange={(e)=>handleChange(e)}></input>
          
          </div>
          
          </div>



          <div className='profiles'>
            {profiles.length > 0  ? (
               profiles.map( profile =>  (
               profile.skills.includes(filter) ? <div> <ProfileItem key={profile._id} profile={profile} /> </div>
               : <Fragment></Fragment> ))
            ) : (
              <h4> no Profiles to show </h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};



Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
