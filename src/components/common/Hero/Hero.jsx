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
    <div className={classes.heroContainer}>
      <Row>
        <Col xs={12} sm={6} className={classes.textContainer}>
          <p classes={classes.preText}>{ heroPreText }</p>
          <h1 className={classes.heroHeadline}>{ heroHeadline }</h1>
          <p classes={classes.postText}>{ heroPostText }</p>
        </Col>
      </Row>
      <Row className={cn(classes.stretchFullWidth, classes.background)}>
        <Col xs={12} sm={6} className={classes.textBackground} />
        <Col xs={12} sm={6} className={classes.mediaContainer}>
        </Col>
      </Row>
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
