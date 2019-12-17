import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const RecipeDetail = ({
  style,
  recipe,
  className,
}) => {
  if(!recipe) {
    return (
      <div style={style} className={classnames('h3 p2 bg-white italic center', className)}>
        <p>Please select a recipe to see the details.</p>
      </div>

    );
  }

  const {
    name,
    image,
    category,
    calories,
    ingredients,
    steps,
    id,
  } = recipe;
  return (
    <div style={style} className={classnames('p2 bg-white', className)}>
      <h2 className="h2">{name}</h2>
      <img
        width='400px'
        className="fit"
        src={image}/>
      <div>
        <span>{category}</span>
        <span>{calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Recipe</h3>
      <ol>
        {steps.map(step => (
          <li key={step}>{step} </li>
        ))}
      </ol>
      <Link
        to={`/recipe/${id}`}
      >
        See more
      </Link>
    </div>
  );
}

RecipeDetail.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object,
  className: PropTypes.string,
}

export default RecipeDetail;
