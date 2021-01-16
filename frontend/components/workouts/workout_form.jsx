import React from 'react';
import {Redirect} from 'react-router-dom';


class WorkoutForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user_id: this.props.userId,
            workout_name: "",
            distance: "",
            duration:"",
            durationMin: "0",
            durationSec:"0",
            average_pace: "",
            workout_description: "",
            date_complete: "",
            sport: "WALKING"
        }
        this.update = this.update.bind(this);
        this.calcPace = this.calcPace.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e)=>{
            return this.setState({[field]:e.currentTarget.value.toString()})

        }
    }

    calcPace(min, sec, dist){
        
        if(this.state.distance !== "" && this.state.durationMin !== "" && this.state.durationSec !== ""){
            function minTommss(minutes){
                var sign = minutes < 0 ? "-" : "";
                var min = Math.floor(Math.abs(minutes));
                var sec = Math.floor((Math.abs(minutes) * 60) % 60);
                return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
               }

            min = parseFloat(min);
            sec = parseFloat(sec);
            dist = parseFloat(dist);
            sec = sec / 60;
            let time = min + sec;
            time = parseFloat(time / dist);
            let averagePace = minTommss(time);
            if(this.state.average_pace !== averagePace){
                this.setState({"average_pace":averagePace, "duration":time.toString()})   
            }
        }else{
            if(this.state.average_pace !== ""){
                return this.setState({"average_pace":"", "duration":""});
            }
        }
    }

    handleSubmit(e){
        const cb = function(promise){
          if(promise){
            this.setState({redirect:true})
          }
        }.bind(this)
        
        e.preventDefault();
        // let info = JSON.stringify(this.state)
        if (this.props.newOrEdit == "New Workout"){
          let workout = {
              athlete_id:this.props.userId,
              workout_name:this.state.workout_name,
              workout_description:this.state.workout_description, 
              distance:this.state.distance, 
              date_complete:this.state.date_complete, 
              average_pace:this.state.average_pace, 
              sport:this.state.sport,
              duration: this.state.duration
            };  
          this.props.processForm(this.props.userId, workout)
            .then((promise) => {
                cb(promise)}
              );
        }else if(this.props.newOrEdit == "Update"){
          this.props.processForm(this.props.userId, this.props.workoutId, this.state)
            .then((promise) => {
                cb(promise)
            });
        }
    }


    render(){
        this.calcPace(this.state.durationMin, this.state.durationSec, this.state.distance);
        
        if (this.state.redirect){
            return <Redirect to='/home/workouts'/>;
          }else if(this.props.newOrEdit == "Update" && !this.updated){
            return null;
          }

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
                            <input style={{width:"30px", marginRight:"0", borderRadius:"0"}} id="duration" onChange={this.update("durationMin")}  className="workout-input" type="number"/>
                            <input style={{width:"30px", marginLeft:"0", marginRight:"1px", borderRadius:"0"}} id="duration" onChange={this.update("durationSec")} className="workout-input" type="number" min="0" max="59"/>
                            <label htmlFor="duration" style={{fontSize:"10px", marginRight:"8px"}}>min/sec</label>
                            <label htmlFor="sport" style={{marginRight:"8px"}}>Sport</label>
                            <select id="sport" onChange={this.update("sport")}>
                                <option value="WALKING">Run</option>
                                <option value="BICYCLING">Bike</option>
                            </select>
                        </div>
                        <div className="workoutDiv">
                            <label htmlFor="workoutName">Workout Name</label>
                            <input id="workoutName" className="workout-input" onChange={this.update("workout_name")} type="text" />
                        </div>
                        <div className="workoutDiv">
                            <label htmlFor="workoutDescription">Description</label>
                            <textarea style={{height:"45px"}} id="workoutDescription" className="workout-input" onChange={this.update("workout_description")}/>
                        </div>
                        <div className="workoutDiv">
                            <label htmlFor="dateComplete">Date Finished</label>
                            <input style={{width:"200px "}} id="dateComplete" className="workout-input" type="date" onChange={this.update("date_complete")}/>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between"}} className="workoutDiv">
                            <span style={{display:"flex"}}>
                                <label htmlFor="averagePace">Pace</label>
                                <input style={{width:"50px"}} id="averagePace" className="workout-input" type="text" value={this.state.average_pace} disabled/>
                                <label htmlFor="averagePace" style={{fontSize:"10px"}}>/mile</label>
                            </span>
                            <div style={{margin:"8px"}} className="sign-up-button" onClick={this.handleSubmit}>Save</div>
                        </div>
                    </form>
                </div>
            </div>

        </>
        )
    }
    

}

export default WorkoutForm;