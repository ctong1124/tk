import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Row, Col } from 'react-flexbox-grid';
import classes from './Hero.css';

const Hero = ({
  heroPreText,
  heroHeadline,
  heroPostText,
  image,
}) => {
  return (
    <React.Fragment>
    <Row className={classes.heroContainer}>
      <Col xs={6} className={classes.textContainer}>
        <p classes={classes.preText}>{ heroPreText }</p>
        <h1 className={classes.heroHeadline}>{ heroHeadline }</h1>
        <p classes={classes.postText}>{ heroPostText }</p>
      </Col>
      <Col xs={6}className={classes.mediaContainer}>
        <img src='https://picsum.photos/300/500' alt='hero image'></img>
      </Col>
    </Row>
    <Row>
      <Col xs={6}> blah </Col>
      <Col xs={6}> blah </Col>
    </Row>
    </React.Fragment>
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
