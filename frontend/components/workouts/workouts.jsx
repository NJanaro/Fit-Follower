import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class Workouts extends React.Component {

    constructor(props){
        super(props);
        this.props.getWorkouts(this.props.userId);
        this.state = {
          updated:false
        }
    }

    

    componentDidUpdate(oldProps){
      if(oldProps != this.props){
        this.setState({updated: true})
      }
    }

    render(){
      // debugger

        return(
            <>
            <div className="my-routes-main">
              <div className="my-routes-top">
                <h1 id="page-title">My Workouts</h1>
                <Link 
                  to="/home/workouts/new"
                  className="sign-up-button"
                  style={{marginBottom:"18px"}}>

                Log New Workout    
                </Link>
              </div>
            <div className="workoutTableMain">
              <table id="workoutTable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Sport</th>
                    <th>Pace</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.workouts.map(wo => {
                  let des;
                  let spo;
                  wo.sport == "WALKING" ? spo = "run" : spo = "bike";
                  wo.workout_description.length > 20 ? des = wo.workout_description.slice(0,20)+"..." : des = wo.workout_description;
                  return(
                    <tr key={wo.id}>
                      <td>
                        <Link to={{
                            pathname: '/home/workouts/edit',
                            state: {
                              workoutId: wo.id
                            }
                          }
                         }>
                          {wo.workout_name}
                        </Link>
                      </td>
                      <td>{des}</td>
                      <td>{spo}</td>
                      <td>{wo.average_pace}</td>
                      <td>{wo.date_complete}</td>
                    </tr>
                  )
                }
                )}
                </tbody>  
              </table>
            </div>      
            </div>


          </>
        )
    }
}

export default withRouter(Workouts);