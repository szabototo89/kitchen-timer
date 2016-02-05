import * as React from 'react';
import TimerList from 'components/timerList';
import TimerListControls from 'components/timerListControls';
import TimerDetails from 'components/timerDetails';

import Timer from 'models/timer';
import Duration from 'models/duration';

function App({ }) {
  return (
    <div>
      <TimerList timers={[ new Timer('1', 'my timer', new Duration(1,1,1)) ]}/>

      <TimerListControls addTimerEvent={() => console.log('add timer event')}
                         removeTimerEvent={() => console.log('remove timer event')}
      />

      <TimerDetails timer={new Timer('1', 'my timer', new Duration(1,2,3))}/>
    </div>
  );
}

export default App;