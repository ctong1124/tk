import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({
  style,
  recipes,
  favorites,
  ...rest
}) => {
  return (
    <ul className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
          recipe={recipe}
          key={recipe.id}
          favorited={favorites.includes(recipe.id)}
          {...rest}
        />
      ))}
    </ul>
  );
}

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  favorites: PropTypes.array,
};

export default RecipeList;
