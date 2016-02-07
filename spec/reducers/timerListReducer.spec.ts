/// <reference path="../../typings/mocha/mocha.d.ts"/>

import { assert } from 'chai';
import timerListReducer from 'reducers/timerListReducer';
import { addTimerToList, removeTimer } from 'actions/timerListActions';
import { updateTimer } from 'actions/timerDetailsActions';
import Timer from "models/timer";

describe('timerListReducer', function() {

  const getInitialState = () => timerListReducer(null, null);

  it('should be initialized with an empty list of timers', function () {
    // arrange
    const initialState = null;

    // act
    const result = timerListReducer(initialState, null);

    // assert
    assert.deepEqual(result, {
      timers: []
    });
  });

  it('should add a new timer to the list when ADD_TIMER has been dispatched', function () {
    // arrange
    const initialState = getInitialState();

    // act
    const result = timerListReducer(initialState, addTimerToList());

    // assert
    assert.isDefined(result.timers);
    assert.equal(result.timers.length, 1)
  });

  it('should remove a timer from the list when REMOVE_TIMER has been dispatched', function () {
    // arrange
    const initialState = getInitialState();
    const state = timerListReducer(initialState, addTimerToList());
    const timer = state.timers[state.timers.length - 1];

    // act
    const result = timerListReducer(state, removeTimer(timer.id));

    // assert
    assert.deepEqual(result.timers, []);
  });

  it('should save timer back into the list', function () {
    // arrange
    const initialState = getInitialState();
    const state = timerListReducer(initialState, addTimerToList());
    const timer = state.timers[state.timers.length - 1];

    // act
    const result = timerListReducer(state, updateTimer(timer));

    // assert
    assert.deepEqual(result, {

    });
  });
});


