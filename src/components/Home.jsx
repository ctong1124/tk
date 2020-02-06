import React from 'react';
import PropTypes from 'prop-types';
import { Hero } from './common';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

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

    return (
      <React.Fragment>
        <Hero heroHeadline='Hero headline'/>
        <div>
          <main className="px4 flex">
            <div>
              <h2 className="h2">Recipes</h2>
              <RecipeList
                recipes={recipes}
                favorites={favorites}
                style={{ flex: 3 }}
                onClick={this.onRecipeClick}
                onFavorited={this.props.toggleFavorite}
              />
            </div>
            <RecipeDetail
              recipe={currentRecipe}
              className="ml4"
              style={{ flex: 5 }}
            />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
}

export default Home;
