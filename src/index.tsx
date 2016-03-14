import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from 'components/App';
import { Provider } from "react-redux";
import configureStore from "stores/configureStore";
import appStore from 'stores/appStore';

import TimerInstanceService from 'models/TimerInstanceService';

export const timerInstanceService = new TimerInstanceService(appStore.dispatch);

const application = (
  <Provider store={appStore}>
    <div>
      <App />
    </div>
  </Provider>
);

ReactDOM.render(application, document.getElementById('app'));