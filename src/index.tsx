import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from 'components/app';
import { Provider } from "react-redux";
import configureStore from "stores/configureStore";
import appReducer from 'reducers/appReducer';

const store = configureStore(appReducer);

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(application, document.getElementById('app'));