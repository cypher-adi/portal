import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    bio: '',
    college: '',
    year: null,
  });

  const { bio, college, year } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* College'
            name='college'
            value={college}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>College your are currently in</small>
        </div>
        <div className='form-group'>
          <input
            type='number'
            placeholder='* Year'
            name='year'
            value={year}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            The year you are currently in the college
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>Tell us a little about yourself</small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
