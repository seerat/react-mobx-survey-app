import React from 'react';
import { observer, inject } from 'mobx-react';


class Home extends React.Component {
    
    state = {
        agentId: ""
    }

    componentDidMount() {
        const { SurveyStore } = this.props;

        // Not sure if this is a orrect approach. 
        // But for now this resets the global store
        SurveyStore.resetStore();
    }

    handleChange = (event)=> {
        this.setState({
            agentId: event.target.value
        }); 
    }

    setAgentId = ()=> {
        const { SurveyStore, history } = this.props;
        
        SurveyStore.setAgentId(this.state.agentId);
        history.push("/welcome");
    }

    render() {

        const { agentId } = this.state;

        return(
            <div className="container-fluid loginpage maincontainer">
                <div className="row">
                    <div className="col-sm-12 col-center text-center">
                        <h2>Combined Insurance <br /> Agency Rating Survey </h2>
                        <p>Please sign in with your Agent ID</p>
                        <input type="text" 
                               onChange={this.handleChange} 
                               className="form-control inlinefiled m10" 
                               name="ids" 
                               placeholder="Agent ID" 
                               value={agentId} />
                        <button onClick={this.setAgentId} className="btn btn-orange m10">Log In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject("SurveyStore")(observer(Home));