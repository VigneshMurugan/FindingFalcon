import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Heading from "components/Heading";
import Home from 'pages/Home';
import FindResult from 'pages/find';
import config from 'config/config';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Heading headingText={config.HEADING_TEXT}/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/result' component={FindResult} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;