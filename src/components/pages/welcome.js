import React from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';

class Welcome extends React.Component {
    render() {
        return(
            <div className="container-fluid middlesmall">
                <div className="row" data-survey="welcome">
                    <div className="col-sm-12 fixedcol400 col-center text-center">
                    <h2>Hello Agent</h2>
                    <p className="text-justify">To start survey, tap the button below<br className="hidden-xs" /> and pass this device to the customer</p>
                    <NavLink to="/customer-welcome" 
                              className="btn btn-block btn-orange">
                        Begin <span className="hidden-xs">Agent</span> Survey <span className="hidden-xs">Experience</span>
                    </NavLink>
                    
                    </div>
                </div>
            </div>

        );
    }
}

export default observer(Welcome);