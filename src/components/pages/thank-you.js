import React from 'react';
import { observer,inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';

class ThankYou extends React.Component {
    render() {
        const { SurveyStore } = this.props;

        let log =  `                    Agent Id:
                    ${SurveyStore.agentId} 
                        
                    Customer Email:
                    ${SurveyStore.customerEmail}
                        
                    Did Customer Opt In:
                    ${SurveyStore.optIn} 
                        
                    Survey Result:
                    ${JSON.stringify(SurveyStore.surveyResult)}`;

        return(
            <div className="container-fluid maincontainer">
                <div className="row" data-survey="thankyou">
                    <div className="col-sm-12 col-center text-center mb45">
                        <h3>Thank you for completing the survey. 
                            <br className="hidden-xs" /> Your feedback is greatly appreciated.
                        </h3>
                    </div>

                    <div>
                        <textarea rows="12" cols="50" defaultValue={log} />
                    </div>

                    <div className="col-sm-4 col-center text-center">
                        <NavLink to="/" className="btn btn-block  btn-orange">Start New Survey</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject("SurveyStore")(observer(ThankYou));