import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

class FitFollower extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <>
            <Provider store={this.props.state}>
              <HashRouter>
                <App/>
              </HashRouter>
            </Provider>
          </>
        );
    }
}

export default FitFollower;