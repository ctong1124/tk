import React from 'react';

const RecipeDetail = ({
  style,
  recipe,
  className,
}) => {
  console.log('blahhhhh')
  console.log('className', className);
  if(!recipe) {
    return (
      <div style={style}>
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
  } = recipe;
  return (
    <div style={style} className={className}>
      <h2>{name}</h2>
      <img
        width='400px'
        src={image}/>
      <div>
        <span>{category}</span>
        <span>{calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h3>Recipe</h3>
      <ol>
        {steps.map(step => (
          <li>{step} </li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
