import React from 'react';
import { observer, inject } from 'mobx-react';

class EnterEmail extends React.Component {

    state = {
        email: ""
    }

    changeHandler = (event)=>{
        this.setState({
            email: event.target.value
        })
    }

    submitHandler = ()=>{
        const { SurveyStore, history } = this.props;

        SurveyStore.setCustomerEmail(this.state.email);

        history.push("/optin");
    }

    render() {
        return(
            <div className="container-fluid maincontainer">
                <div className="row " data-survey="EnterEmail">
                    <div className="col-sm-8 col-center text-center mb45">
                        <h3>What is your email address?</h3>
                    </div>
                    <div className="col-sm-12 fixedcol460 col-center text-center mb20">
                        <div className="row">
                            <div className="col-sm-8 mobilepadding">
                                <input type="text" 
                                       className="form-control" 
                                       name="ids" 
                                       placeholder="Email Address" 
                                       value={this.state.email}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="col-sm-4">
                                <button onClick={this.submitHandler} className="btn btn-block btn-orange">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default inject("SurveyStore")(observer(EnterEmail));