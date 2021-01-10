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
                        <div className="distanceDiv">
                            <input id="distance" className="workout-input" type="text"/>
                            <input id="sport" className="workout-input" type="text"/>
                        </div>

                            <input id="workoutName" className="workout-input" type="text"/>
                            <input id="duration" className="workout-input" type="text"/>
                            <input id="averagePace" className="workout-input" type="text"/>
                            <input id="dateComplete" className="workout-input" type="text"/>
                            <input id="workoutDescription" className="workout-input" type="text"/>


                        
                    </form>
                </div>
            </div>

        </>
        )
    }


}

export default WorkoutForm;