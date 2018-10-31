import { extendObservable, action } from 'mobx';

class SurveyStore {
    constructor() {

        extendObservable(this, {
            agentId: "",
            loggedIn: false,
            customerEmail: "",
            optIn: false,
            surveyResult: [],

            authenticate: action((cb)=>{
                this.loggedIn = true
                setTimeout(cb, 100) // fake async
            }),
            
            setAgentId: action((id)=>{
                
                // This is incorect, as we need to consider async login here. 
                // But for now, keep it this way
                this.authenticate(id);

                this.agentId = id;
                
            }),

            setCustomerEmail: action((email)=>{
                this.customerEmail = email;
            }),
            
            setOptIn: action((val)=>{
                this.optIn = val;
            }),

            setSurveyResult: action((arr)=>{
                this.surveyResult = arr;
            }),

            logOut: action(()=>{
                this.loggedIn = false;
            }),

            resetStore: action(()=>{
                this.agentId = "";
                this.loggedIn = false;
                this.customerEmail = "";
                this.optIn = false;
                this.surveyResult = [];
            })
        });
    }
}

export default new SurveyStore();