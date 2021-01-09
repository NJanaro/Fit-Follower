import React from 'react';


class WorkoutForm extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
        <>
            <div className="my-routes-main">
                <div className="workout-form">
                    <form>
                            <input className="workout-input" type="text"/>
                            <input className="workout-input" type="text"/>
                            <input className="workout-input" type="text"/>
                            <input className="workout-input" type="text"/>

                        
                    </form>
                </div>
            </div>

        </>
        )
    }


}

export default WorkoutForm;