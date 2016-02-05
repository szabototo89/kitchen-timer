import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import App from 'application/app';
import configureStore from "stores/configureStore";

const mapStateToProps = (state) => ({
  timerList: state.timerList,
  timerDetails: state.timerDetails
});

const Application = connect(mapStateToProps)(App as any) as any;
const store = configureStore();

const application = (
  <Provider store={store}>
    <Application />
  </Provider>
);

ReactDOM.render(application, document.getElementById('app'));