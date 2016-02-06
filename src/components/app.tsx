import * as React from 'react';
import TimerList from 'components/timerList';
import TimerListControls from 'components/timerListControls';
import TimerDetailsContainer from 'containers/timerDetailsContainer';

import Timer from 'models/timer';
import Duration from 'models/duration';

function App({ }) {
  return (
    <div>
      <TimerList timers={[ new Timer('1', 'my timer', new Duration(1, 1, 1)) ]}/>

      <TimerListControls onTimerAdd={() => console.log('add timer event')}
                         onTimerRemove={() => console.log('remove timer event')}
      />

      <TimerDetailsContainer />
    </div>
  );
}

export default App;