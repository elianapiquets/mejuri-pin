import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import Nav from "./components/Nav";
import NavButton from "./components/NavButton";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme/theme";
import configureStore from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import All from "./containers/All";
import Earrings from "./containers/Earrings";
import Bracelets from "./containers/Bracelets";
import Like from "./containers/Like";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Fragment>
              <Nav>
                <NavButton to="/like">Like</NavButton>
                <NavButton to="/bracelets">Bracelets</NavButton>
                <NavButton to="/earrings"> Earrings</NavButton>
                <NavButton exact to="/"> All</NavButton>
              </Nav>
            </Fragment>
            <Switch>
              <Route path="/like" component={Like} />
              <Route path="/bracelets" component={Bracelets} />
              <Route path="/earrings" component={Earrings} />
              <Route exact path="/" component={All} />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
