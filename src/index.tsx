import * as React from 'react';
import * as ReactDOM from 'react-dom';

//import App from 'components/app';
import { Provider } from "react-redux";
import configureStore from "stores/configureStore";
import appStore from 'stores/appStore';

import ListContainer from 'containers/listContainer';

const AppComponent: any = ({ elements, onElementAdd }) => {
  const elementAdd = function (value, ...rest) {
    return onElementAdd(10);
  };

  return <div>
    <ul>
      {elements.map(element => <li>{element}</li>)}
    </ul>
    <button onClick={elementAdd.bind(10)}>Add element</button>
  </div>;
};

const App = ListContainer({ name: 'my-list', propName: 'elements'})(AppComponent);
const App2 = ListContainer({ name: 'my-other-list', propName: 'elements' })(AppComponent);

const application = (
  <Provider store={appStore}>
    <div>
      <App />
      <App2 />
    </div>
  </Provider>
);

ReactDOM.render(application, document.getElementById('app'));