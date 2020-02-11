import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { Hero, Layout } from '../common';
import RecipeList from '../RecipeList';
import RecipeDetail from '../RecipeDetail';
import classes from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
      currentRecipe: null,
    };
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then((res) => res.json())
      .then((recipe) => {
        this.setState({
          currentRecipe: recipe,
        });
      });
  }

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites } = this.props.state;
    const layoutProps = {
      xs: 12,
      md: 3,
    };

    return (
      <Layout>
        <Hero heroHeadline='Hero headline' heroPostText='Go to link'/>
        <Row>
          <Col {...layoutProps}><div className={classes.cardPlaceholder}></div></Col>
          <Col {...layoutProps}><div className={classes.cardPlaceholder}></div></Col>
          <Col {...layoutProps}><div className={classes.cardPlaceholder}></div></Col>
          <Col {...layoutProps}><div className={classes.cardPlaceholder}></div></Col>
        </Row>
      </Layout>
    );
  }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
}

export default Home;
