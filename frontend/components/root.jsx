import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Loader from '../components/loader';

import App from '../app';

class Root extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      // debugger
        return (
          <>
            <Provider store={this.props.store.store}>
              <PersistGate loading={<Loader />} persistor={this.props.store.persistor}>
                <HashRouter>
                  <App/>
                </HashRouter>
              </PersistGate>
            </Provider>
          </>
        );
    }
}

export default Root;