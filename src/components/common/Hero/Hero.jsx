import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './Hero.css';

const Hero = ({
  heroPreText,
  heroHeadline,
  heroPostText,
  image,
}) => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.textContainer}>
        <p classes={classes.preText}>{ heroPreText }</p>
        <h1 className={classes.heroHeadline}>{ heroHeadline }</h1>
        <p classes={classes.postText}>{ heroPostText }</p>
      </div>
      <div className={classes.mediaContainer}>
        <img src='https://picsum.photos/300/500' alt='hero image'></img>
      </div>
    </div>
  );
}

Hero.propTypes = {
  heroPreText: PropTypes.string,
  heroHeadline: PropTypes.string,
  heroPostText: PropTypes.string,
  image: PropTypes.string,
};

Hero.defaultProps = {
  heroPreText: '',
  heroHeadline: '',
  heroPostText: '',
  image: '',
};

export default Hero;
