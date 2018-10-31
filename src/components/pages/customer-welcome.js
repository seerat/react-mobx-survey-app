import React from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';

class CustomerWelcome extends React.Component {
    render() {
        return(
            <div className="container-fluid maincontainer">
                <div className="row" data-survey="customerwelcome">
                    <div className="col-sm-9 col-center text-center mb40">
                        <h3>Thank you for visiting us today.<br className="hidden-xs" /> Please let us know how your visit went by completing a quick survey.</h3>
                        <p>Survey will take approximately 5 minutes.</p>
                    </div>
                    <div className=" col-sm-4 col-center">
                        <NavLink to="/enter-email" 
                                 type="button" 
                                 className="btn btn-block  btn-orange">
                            Begin Survey
                        </NavLink>
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default observer(CustomerWelcome);