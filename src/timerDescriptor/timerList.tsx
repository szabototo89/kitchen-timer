import * as React from 'react';
import { createTimer, removeTimerFromList } from 'actions/timerListActions';
import { changeName, enterEditMode, exitEditMode } from 'actions/timerDetailsActions';

import TimerDescriptor from 'timerDescriptor/timerDescriptor';
import Button from 'common/button';

interface TimerListProps {
  timers?: Array<any>;
  dispatch?: Function;
}

function TimerList({ timers, dispatch }: TimerListProps) {
  const addTimer = () => dispatch(createTimer('My timer'));
  const removeTimer = (timerId: string) => dispatch(removeTimerFromList(timerId));
  const startEditTimer = (timer) => dispatch(enterEditMode(timer));
  const endEditTimer = (timer) => dispatch(exitEditMode(timer));

  return (
    <div>
      {timers.map((timer) => {
        const { editMode, id, duration, name } = timer;

        return (<div key={id}>
          <TimerDescriptor name={name} options={duration}/>
          {
            !editMode
              ? <Button onClick={startEditTimer.bind(null, timer)}>Edit</Button>
              : <Button onClick={endEditTimer.bind(null, timer)}>Save</Button>
          }
          <Button onClick={removeTimer.bind(null, id)}>Remove</Button>
        </div>);
      })}

      <Button onClick={addTimer}>Add timer</Button>
    </div>
  );
}

export default TimerList;