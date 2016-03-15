import * as React from 'react';

const TabLayout = ({ children }: any) => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Kitchen Timer</span>
        </div>

        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <a href="#active-timers" className="mdl-layout__tab">Active Timers</a>
          <a href="#timer-presets" className="mdl-layout__tab is-active">Timer Presets</a>
        </div>
      </header>
      <main className="mdl-layout__content">
        {children}
      </main>
    </div>
  );
};

export default TabLayout;