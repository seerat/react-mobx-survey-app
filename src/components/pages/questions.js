import React from 'react';
import { observer, inject } from 'mobx-react';
import Question from '../blocks/question.js';
import Pagination from '../blocks/pagination.js';
import axios from 'axios';

class Questions extends React.Component {

    state = {
        allQuestions: [],
        currentQuestion: {},
        currentPage: null,
        totalPages: null,
        questionsRating: []
    }

    componentDidMount() {
        let fetchedQuestions = [];
        
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            fetchedQuestions = response.data.slice(0, 5);

            this.setState({ 
                allQuestions:  fetchedQuestions,
                currentQuestion: fetchedQuestions[0],
                currentPage: 1,
                totalPages: fetchedQuestions.length
            });
            
        }).catch((error) => {
            console.log(error);
        });
        
    }

    onPageChanged = (data) => {
        
        // console.log(data);

        const { allQuestions } = this.state;

        const { newPage } = data;

        const offset = (newPage - 1);

        const currentQuestion = allQuestions.slice(offset, offset + 1);

        // console.log(currentQuestion[0]);

        this.setState({ 
            currentPage: newPage, 
            currentQuestion: currentQuestion[0]
        });

        // console.log(this.state);
    };
    
    handleRatingChange = (data)=>{
        let newQuestionRating = this.state.questionsRating.slice();
        let elementIndex = -1;

        // if id found, update, if not found - push
        newQuestionRating.map((element, index)=>{
            if(element.qId === data.qId) {
                elementIndex = index;
                return element;
            }
            return element;
        });

        if(elementIndex === -1) {
            newQuestionRating.push(data);
            // console.log(newQuestionRating);
        } else {
            newQuestionRating[elementIndex] = data;
            // console.log(elementIndex);
        }

        this.setState({
            questionsRating: newQuestionRating
        })
    }

    handleFinish = ()=>{

        const { history } = this.props;
        const { questionsRating } = this.state;

        this.props.SurveyStore.setSurveyResult(questionsRating);
        
        history.push("/thank-you");
    }


    // TODO: This is basically a utli method. Remove it from 
    // here and move this into some kind of a util file. Params should change to take in array as well.

    findRatingArrayIndex = (qId)=> {
        const newQuestionRating = this.state.questionsRating.slice();
        let elementIndex = null;

        // console.log(`Params sent QId = ${qId}`);
        // console.log(`questionsRating = ${JSON.stringify(newQuestionRating)}`);

        // console.log(newQuestionRating.findIndex(x => x.qId === qId));

        elementIndex = newQuestionRating.findIndex(x => x.qId === qId)

        return elementIndex;
    }

    render() {

        const { currentQuestion, currentPage, totalPages, questionsRating } = this.state;

        let currentQIndex = this.findRatingArrayIndex(currentQuestion.id);
        let currentQRating = 0;
        
        // console.log(`current index is: ${currentQIndex}`);

        if(currentQIndex !== -1) {
            currentQRating = questionsRating[currentQIndex].rating;
            console.log(currentQIndex);
        }

        return(
            <div className="container-fluid maincontainer">
                <div className="row" data-survey="question">
                    
                    {/* Adding key in the below component will force re-mounting 
                      the question component as a new component */}
                    
                    <Question 
                        key={`question-${currentQuestion.id}`}
                        currentQuestion= {currentQuestion} 
                        currentRating = {currentQRating}
                        handleRatingChange = {this.handleRatingChange}
                    />

                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChanged={this.onPageChanged}
                        handleFinish = {this.handleFinish}
                    />

                </div>
            </div>
        );
    }
}

export default inject("SurveyStore")(observer(Questions));