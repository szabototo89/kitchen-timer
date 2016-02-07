///<reference path="../../typings/mocha/mocha.d.ts"/>

import { assert } from 'chai';
import Duration from "models/duration";
import timerDetails from 'reducers/timerDetails';

import { editTimer } from 'actions/timerListActions';
import { changeTimerName, changeTimerDuration } from "actions/timerDetailsActions";
import TimerDetailsState from "reducers/timerDetails";
import Timer from "models/timer";

describe('timerDetails reducer', function() {

  const getInitialState = () => {
    return timerDetails(null, null);
  };

  it('should return an empty state when state is null', function() {
    // arrange
    const state = null;

    // act
    const result = timerDetails(state, null);

    // assert

    assert.deepEqual(result, {
      name: null,
      duration: new Duration(),
      timerId: null
    });
  });

  it('should return a new TimerDetailsState with the changed name when CHANGE_NAME action has been passed', function() {
    // arrange
    const initialState = timerDetails(null, null);
    const action = changeTimerName('my-timer');

    // act
    const result = timerDetails(initialState, action);

    // assert
    assert.deepEqual(result, {
      timerId: null,
      duration: new Duration(),
      name: 'my-timer'
    });
  });

  it('should return a new TimerDetailsState with changed duration value when CHANGE_DURATION action has been passed with hours', function () {
    // arrange
    const initialState = timerDetails(null, null);
    const action = changeTimerDuration({
      hours: 10
    });

    // act
    const result = timerDetails(initialState, action);

    // assert
    assert.deepEqual(result, {
      timerId: initialState.timerId,
      name: initialState.name,
      duration: new Duration(10)
    });
  });

  it('should return a new TimerDetailsState with changed duration when CHANGE_DURATION action has passed multiple values', function () {
    // arrange
    const initialState = timerDetails(null, null);
    const action = changeTimerDuration({
      hours: 10,
      minutes: 30
    });

    // act
    const result = timerDetails(initialState, action);

    // assert
    assert.deepEqual(result, {
      timerId: initialState.timerId,
      name: initialState.name,
      duration: new Duration(10, 30)
    });
  });

  it('should return zero when duration is lesser than 0', function () {
    // arrange
    const initialState = timerDetails(null, null);
    const action = changeTimerDuration({
      hours: -1,
      minutes: -4
    });

    // act
    const result = timerDetails(initialState, action);

    // assert
    assert.deepEqual(result, {
      timerId: initialState.timerId,
      name: initialState.name,
      duration: new Duration(0, 0, 0)
    });
  });

  it('should load timer in timer list into timer details', function () {
    // arrange
    const initialState = getInitialState();
    const timer = new Timer('timer-1', 'demo timer', new Duration(1, 2, 3));
    const action = editTimer(timer);

    // act
    const result = timerDetails(initialState, action);

    // assert
    assert.deepEqual(result, {
      timerId: 'timer-1',
      name: 'demo timer',
      duration: new Duration(1, 2, 3)
    });
  });
});
