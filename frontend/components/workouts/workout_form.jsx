import React from 'react';


class WorkoutForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user_id: this.props.userId,
            workout_name: "",
            distance: "",
            duration: "",
            average_pace: "",
            workout_description: "",
            date_complete: "",
            sport: ""
        }
        this.update = this.update.bind(this);
    }

    update(field){
        return (e)=>{
            console.log(Object.values(this.state.distance).join(" ").split(""));
            return this.setState({[field]:e.currentTarget.value + " mi"})

        }
    }

    render(){
        return(
        <>
            <div className="my-routes-main">
              <div className="my-routes-top">
                <h1 id="page-title">{this.props.newOrEdit}</h1>
              </div>      
                <div>
                    <form className="workout-form">
                        <div className="workoutDiv">
                            
                            <label htmlFor="distance">Distance</label>
                            <input style={{width:"50px"}} id="distance" onChange={this.update("distance")} className="workout-input" type="number"/>
                            <label htmlFor="duration">Duration</label>
                            <input style={{width:"30px", marginRight:"0", borderRadius:"0"}} id="duration" className="workout-input" type="number"/>
                            <input style={{width:"30px", marginLeft:"0", borderRadius:"0"}} id="duration" className="workout-input" type="number"/>
                            <label htmlFor="sport" style={{marginRight:"8px"}}>Sport</label>
                            <select id="sport">
                                <option value="WALKING">Run</option>
                                <option value="BICYCLING">Bike</option>
                            </select>
                        </div>
                        <div className="workoutDiv">
                            <label htmlFor="workoutName">Workout Name</label>
                            <input id="workoutName" className="workout-input" type="text"/>
                            <label htmlFor="workoutDescription">Description</label>
                            <input id="workoutDescription" className="workout-input" type="text"/>
                            <label htmlFor="dateComplete">Date Finished</label>
                            <input style={{width:"200px "}} id="dateComplete" className="workout-input" type="date"/>
                        </div>
                        <div className="workoutDiv">
                            <label htmlFor="averagePace">Pace</label>
                            <input style={{width:"50px"}} id="averagePace" className="workout-input" type="text" disabled/>
                        </div>
                    </form>
                </div>
            </div>

        </>
        )
    }


}

export default WorkoutForm;