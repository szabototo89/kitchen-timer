import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from 'components/app';
import { Provider } from "react-redux";
import configureStore from "stores/configureStore";
import appStore from 'stores/appStore';

import ListContainer from 'containers/listContainer';

const application = (
  <Provider store={appStore}>
    <div>
      <App />
    </div>
  </Provider>
);

ReactDOM.render(application, document.getElementById('app'));