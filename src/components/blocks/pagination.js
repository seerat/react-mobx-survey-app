import React from 'react';

class Pagination extends React.Component {

    state = {
        showPrev: false,
        showNext: true
    }

    handleNext = ()=> {
        const { currentPage, totalPages, onPageChanged } = this.props;

        if(currentPage !== totalPages ) {
            // console.log(`current page: ${currentPage}`);

            const newPage = currentPage + 1;

            this.setState({
                showPrev: true,
                showNext: (newPage < totalPages)?true:false
            });

            console.log(`Next Page: ${newPage}`);
            onPageChanged({newPage});
        }
    }

    handlePrevious = ()=> {
        const { currentPage, onPageChanged } = this.props;
        
        if(currentPage !== 1 ) {
            
            const newPage = currentPage - 1;

            this.setState({
                showPrev: (newPage === 1)?false:true,
                showNext: true
            });

            console.log(`Prev Page: ${newPage}`);
            onPageChanged({newPage});
        }
    }

    
    handleFinish = () =>{
        this.props.handleFinish();
    }

    
    render() {

        if(this.state.showPrev && this.state.showNext) {
            return (
                <div className="col-sm-11 col-center">
                    <button onClick={this.handlePrevious} type="button " className="btn btn-wight ">Previous</button>
                    <button onClick={this.handleNext} type="button " className="btn btn-orange pull-right">Next</button>
                </div>
            );

        } else if(!this.state.showPrev && this.state.showNext ) {
            return (<div className="col-sm-11 col-center">
                {/* <button onClick={this.handlePrevious} type="button " className="btn btn-wight ">Previous</button> */}
                <button onClick={this.handleNext} type="button " className="btn btn-orange pull-right">Next</button>
            </div>)
        } else {
            return (<div className="col-sm-11 col-center">
                <button onClick={this.handlePrevious} type="button " className="btn btn-wight ">Previous</button>
                <button onClick={this.handleFinish} type="button " className="btn btn-orange pull-right">Finish</button>
            </div>)
        }
    }
}

export default Pagination;