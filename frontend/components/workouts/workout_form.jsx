import React from 'react';


class WorkoutForm extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
        <>
            <div className="my-routes-main">
              <div className="my-routes-top">
                <h1 id="page-title">{this.props.newOrEdit}</h1>
              </div>      
                <div className="workout-form">
                    <form>
                        <div className="workoutDiv">
                            
                            <label htmlFor="distance">Distance</label>
                            <input id="distance" className="workout-input" type="text"/>
                            <label htmlFor="sport">Sport</label>
                            <input id="sport" className="workout-input" type="text"/>
                        </div>
                        <div className="workoutDiv">
                            <label htmlFor="workoutName">Workout Name</label>
                            <input id="workoutName" className="workout-input" type="text"/>
                            <label htmlFor="workoutDescription">Description</label>
                            <input id="workoutDescription" className="workout-input" type="text"/>
                            <label htmlFor="dateComplete">Date Finished</label>
                            <input id="dateComplete" className="workout-input" type="text"/>
                        </div>
                        <div className="workoutDiv">
                            <input id="duration" className="workout-input" type="text"/>
                            <input id="averagePace" className="workout-input" type="text"/>
                        </div>
                    </form>
                </div>
            </div>

        </>
        )
    }


}

export default WorkoutForm;