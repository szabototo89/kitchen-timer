import * as React from 'react';
import Button from 'common/button';
import { SimpleList } from 'reducers/simpleListFactory';
import TimerPresetListContainer from 'containers/TimerPresetListContainer';
import ActiveTimerListContainer from 'containers/ActiveTimerListContainer';

const App = () => (
  <div>
    <ActiveTimerListContainer />
    <TimerPresetListContainer name="timerPresets"/>
  </div>
);

export default App;