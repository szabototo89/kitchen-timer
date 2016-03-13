import * as React from 'react';
import TimeDurationComponent from 'components/TimeDurationComponent';

const TimerPresetComponent = ({ name, duration }) => {
  return (
    <div>
      <div>
        {name}
      </div>
      <div>
        <TimeDurationComponent hour={duration.hour}
                               minute={duration.minute}
                               second={duration.second} />
      </div>
    </div>
  )
};

export default TimerPresetComponent;