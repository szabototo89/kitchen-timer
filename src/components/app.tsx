import * as React from 'react';
import TimerListContainer from 'containers/timerListContainer';
import TimerListControlsContainer from 'containers/timerListControlsContainer';
import TimerDetailsContainer from 'containers/timerDetailsContainer';

import Timer from 'models/timer';
import Duration from 'models/duration';

function App() {
  return (
    <div>
      <TimerListContainer />
      <TimerListControlsContainer />
      <TimerDetailsContainer />
    </div>
  );
}

export default App;