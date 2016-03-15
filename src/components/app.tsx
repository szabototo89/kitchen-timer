import * as React from 'react';
import Button from 'common/button';
import { SimpleList } from 'reducers/simpleListFactory';
import TimerPresetListContainer from 'containers/TimerPresetListContainer';
import ActiveTimerListContainer from 'containers/ActiveTimerListContainer';
import TabLayout from 'components/TabLayout';
import TabItemLayout from 'components/TabItemLayout';

const App = () => (
  <TabLayout>
    <TabItemLayout id="active-timers">
      <ActiveTimerListContainer />
    </TabItemLayout>
    <TabItemLayout id="timer-presets">
      <TimerPresetListContainer name="timerPresets"/>
    </TabItemLayout>
  </TabLayout>
);

export default App;