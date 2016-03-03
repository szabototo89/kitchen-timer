import * as React from 'react';

import ActiveTimerList from 'components/activeTimerList';

import TimerListContainer from 'containers/timerListContainer';
import TimerListControlsContainer from 'containers/timerListControlsContainer';
import TimerDetailsContainer from 'containers/timerDetailsContainer';
import ActiveTimerListContainer from 'containers/activeTimerListContainer';

import Timer from 'models/timer';
import Duration from 'models/duration';

function App() {
  // http://codepen.io/anon/pen/YqzrYj?editors=1000
  return (
    <div>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            { /* Title */ }
            <span className="mdl-layout-title">Kitchen Timer</span>
          </div>
          { /* Tabs */ }
          <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
            <a href="#scroll-tab-1" className="mdl-layout__tab">Active Timers</a>
            <a href="#scroll-tab-2" className="mdl-layout__tab is-active">Timer Presets</a>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
        </div>
        <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
            <ActiveTimerListContainer />
          </section>

          <section className="mdl-layout__tab-panel" id="scroll-tab-2">
            <TimerListContainer />
            <TimerListControlsContainer />
            <TimerDetailsContainer />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;