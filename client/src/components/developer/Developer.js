import React, { Fragment } from 'react';

const Developer = () => {
  return (
    <Fragment>
      <div class='profile-grid my-1'>
        <div class='profile-top bg-primary p-2'>
          <img
            class='round-img my-1'
            src='https://s.gravatar.com/avatar/86f1d281c442e9666df035616131b58d?s=250'
            alt=''
          />
          <h1 class='large'>Aditya Kumar</h1>
          <p class='lead'>Full Stack Technoid</p>
          <p>Gorakhpur, UP, IN</p>
          <div class='icons my-1'>
            <a
              href='mailto:adityasaha444@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fas fa-envelope fa-2x'></i>
            </a>
            <a
              href='https://www.github.com/cypher-adi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-github fa-2x'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/aditya-kumar-934943133/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-linkedin fa-2x'></i>
            </a>
            <a
              href='https://www.facebook.com/adityasaha444'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-facebook fa-2x'></i>
            </a>
            <a
              href='https://www.instagram.com/saha_adi_'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-instagram fa-2x'></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Developer;
