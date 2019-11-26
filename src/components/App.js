import React from 'react';
import Header from './Header.jsx';
import RecipeList from './RecipeList.jsx';
import RecipeDetail from './RecipeDetail.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null,
    };
  }

  componentDidMount () {
    fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(recipes => {
      this.setState({
        recipes,
      })
    });
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`)
    .then(res => res.json())
    .then(recipe => {
      this.setState({
        currentRecipe: recipe,
      })
    });
  }

  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div>
        <Header />
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
          />
          <RecipeDetail
            recipe={currentRecipe}
            className="px4"
            style={{flex: 8}}
          />
        </main>
      </div>
    );
  }
};

export default App;
