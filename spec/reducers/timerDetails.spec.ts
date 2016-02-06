///<reference path="../../typings/mocha/mocha.d.ts"/>
import { assert } from 'chai';
import Duration from "models/duration";
import timerDetails from 'reducers/timerDetails';

import { changeTimerName, changeTimerDuration } from "actions/timerDetailsActions";

describe('timerDetails reducer', function() {
  it('should return an empty state when state is null', function() {
    // arrange
    const state = null;

    // act
    const result = timerDetails(state, null);

    // assert

    assert.deepEqual(result, {
      name: '',
      duration: null,
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
      duration: null,
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
      timerId: null,
      duration: new Duration(10, 0, 0),
      name: null
    });
  });
});
