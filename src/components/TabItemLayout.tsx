import * as React from 'react';

const TabItemLayout = ({ children, id }: any) => {
  return (
    <section className="mdl-layout__tab-panel is-active" id={id}>
      <section className="section--center mdl-grid mdl-grid--no-spacing">
        {children}
      </section>
    </section>
  );
};

export default TabItemLayout;