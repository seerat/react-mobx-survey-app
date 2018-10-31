import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/pages/home.js';
import Welcome from './components/pages/welcome.js';
import CustomerWelcome from './components/pages/customer-welcome.js';
import EnterEmail from './components/pages/enter-email.js';
import OptIn from './components/pages/optIn.js';
import Questions from './components/pages/questions.js';
import ThankYou from './components/pages/thank-you.js';
import Header from './components/blocks/header.js';
import PrivateRoute from './components/blocks/privateroute.js';


// Step 1: index.html - Home

// Step 2: welcome.html - Welcome

// Step 3: customerwelcome.html - CustomerWelcome

// Step 4: Enter-Email.html - CustomerEmail

// Step 5: Opt-In.html - NewsLetterOptIn

// Step 6: question.html - Questions

// Step 7: thank-you.html - ThankYou


class App extends Component {
  render() {
    return (
      <>      
        <Header />
          
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/welcome" component={Welcome} />
          <PrivateRoute path="/customer-welcome" component={CustomerWelcome} />
          <PrivateRoute path="/enter-email" component={EnterEmail} />
          <PrivateRoute path="/optin" component={OptIn} />
          <PrivateRoute path="/questions" component={Questions} />
          <PrivateRoute path="/thank-you" component={ThankYou} />
        </Switch>
      </>
    );
  }
}

export default inject("SurveyStore")(withRouter(observer(App)));
