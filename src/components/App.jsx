import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Recipe from './Recipe';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then((res) => res.json())
      .then((recipes) => {
        this.setState({
          recipes,
        });
      });
  }

  toggleFavorite = (id) => {
    this.setState(({ favorites, ...state}) => {
      const idx = favorites.indexOf(id);
      if(idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f.id === id)};
      }
      return { ...state, favorites: [...favorites, id] };
    })
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home state={this.state} toggleFavorite={this.toggleFavorite} />
              )}
            />
            <Route
              path="/about"
              render={() => (
                <About state={this.state} toggleFavorite={this.toggleFavorite}/>
              )}
            />
            <Route
              path="/recipe/:id"
              component={Recipe}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
