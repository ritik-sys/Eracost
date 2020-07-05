import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Verification from './components/auth/Verification'
import AuthState from './context/auth/AuthState'

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/verification" component={Verification} />
          </Switch>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;
