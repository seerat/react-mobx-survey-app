import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Question extends React.Component {

    state = {
        rating: this.props.currentRating || 0
    }

    componentDidMount() {
        console.log("Did Mount");
    }

    onStarClick = (nextValue, prevValue, name)=> {
        this.setState({rating: nextValue});

        // call the props method and pass on the value
        this.props.handleRatingChange({
            qId: this.props.currentQuestion.id,
            rating: nextValue
        });
    }

    render() {

        const { rating } = this.state;
        
        const { currentQuestion } = this.props;

        return(
            <>
                <div className="col-sm-11 col-center text-center">
                    <div className="questionbox">
                        <h3>{currentQuestion.title}</h3>
                    </div>

                    <StarRatingComponent 
                        name={`rate-${currentQuestion.id}`} 
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick}
                    />
                    
                </div>
            </>
        );
    }
}

export default Question;