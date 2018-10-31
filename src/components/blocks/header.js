import React from 'react';
import { observer, inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render() {

        if(this.props.SurveyStore.loggedIn) {
            return(
                <>
                    <div className="header">
                        <div className="container-fluid">
                            <header className="headercontianer enter-email">
                            <NavLink to="/" className="logo" title="COMBINED INSURANCE">COMBINED INSURANCE</NavLink>
                            <div className="headerright">
                                    <NavLink to="/" title="Log Out">Log Out <i className="fa fa-sign-in" aria-hidden="true"></i></NavLink>
                            </div>
                            </header>
                        </div>
                    </div>
                </>
            );
        } else {
            return(
            <>
                <div className="header">
                    <div className="container-fluid">
                        <header className="headercontianer enter-email">
                        <NavLink to="/" className="logo" title="COMBINED INSURANCE">COMBINED INSURANCE</NavLink>
                        </header>
                    </div>
                </div>
            </>
            );
        }

        
    }
}

export default inject("SurveyStore")(observer(Header));