import React from 'react';
import { observer, inject } from 'mobx-react';

class OptIn extends React.Component {

    setOptIn = (val)=> {
        this.props.SurveyStore.setOptIn(val);

        this.props.history.push("/questions");
    }

    customerOptIn = ()=> {
        this.setOptIn(true);
    }
    
    customerOptOut = ()=> {
        this.setOptIn(false);
    }

    render() {
        return(
            <div className="container-fluid maincontainer">
                <div className="row" data-survey="Optin2">
                    <div className="col-sm-8 col-center text-center mb30">
                        <h3>Want to Receive Special Offers?</h3>
                        <p>Occasionally we send out special offers and information </p>
                    </div>
                    <div className="col-sm-12 fixedcol460 col-center text-center mb20">
                        <a href="#" onClick={this.customerOptIn} className="btn btn-block  btn-orange">Receive Offers</a>
                    </div>
                    <div className="col-sm-12 fixedcol460 col-center text-center">
                        <a href="#" onClick={this.customerOptOut} className="btn btn-block  btn-orangeborder">No, Thanks</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject("SurveyStore")(observer(OptIn));
