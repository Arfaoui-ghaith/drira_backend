import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';

import Loading from './pages/Layouts/loading';

// Import css
import './Apps.scss';

// Import all components
const homeBusiness = React.lazy(() => import('./pages/home-business'));


class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Router>
          <React.Suspense fallback={<div><Loading /></div>}>
            <Switch>
    
              <Route path="/" component={homeBusiness} />
              
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}



export default withRouter(App);


