import * as React from 'react';
import TimerListControls from 'components/timerListControls';
import TimerListContainer from 'containers/timerListContainer';
import TimerDetailsContainer from 'containers/timerDetailsContainer';

import Timer from 'models/timer';
import Duration from 'models/duration';

function App({ }) {
  return (
    <div>
      <TimerListContainer />

      <TimerListControls onTimerAdd={() => console.log('add timer event')}
                         onTimerRemove={() => console.log('remove timer event')}
      />

      <TimerDetailsContainer />
    </div>
  );
}

export default App;