import React from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
    render() {
        if(this.props.SurveyStore.loggedIn === true) {
            return(
                    <Route path={this.props.path} component={this.props.component} />
                );
        } else {
            return(<Redirect to='/' />);
        }
    }
}

export default inject("SurveyStore")(observer(PrivateRoute));