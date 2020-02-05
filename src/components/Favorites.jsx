import React from 'react';
import RecipeList from './RecipeList';
import classes from './Favorites.css';

const Favorites = ({ state, toggleFavorite }) => (
  <div className={classes.px4}>
    <h2 className={classes.h2}>Favorites</h2>
    <RecipeList
      recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
      favorites={state.favorites}
      onFavorited={toggleFavorite}
    />
  </div>
);

export default Favorites;
