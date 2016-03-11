// <reference path="../../typings/mocha/mocha.d.ts"/>

import { assert } from 'chai';
import timerPresetsReducer, {addTimerPreset, removeTimerPreset} from 'reducers/timerPresetsReducer';
import { TimerPreset } from "models/TimerPreset";
import { Duration } from "models/Duration";

declare function describe(message: string, callback: Function);
declare function it(message: string, callback: Function);

describe('timerPresetsReducer', function() {

  const underTest: Function = timerPresetsReducer;

  const initialState = underTest(null, null);

  it('should return with initial state when passing null state', function () {
    // arrange

    // act
    const result = underTest(null, null);

    // assert
    assert.deepEqual(result, []);
  });

  it('should add a new element to time presets when calling addTimerPreset action creator', function() {
    // arrange
    //const preset = new TimerPreset('my-timer', new Duration(0, 0, 0));
    const action = addTimerPreset('my-timer');

    // act
    const result = underTest(initialState, action);

    // assert
    assert.deepEqual(result, [ new TimerPreset('my-timer', new Duration(0, 0, 0)) ]);
  });

  it('should remove a selected element from time presets when calling removeTimerPreset action creator', function() {
    // arrange
    const state = underTest(initialState, addTimerPreset('my-timer'));
    const action = removeTimerPreset(new TimerPreset('my-timer', new Duration(0, 0, 0)));

    // act
    const result = underTest(state, action);

    // assert
    assert.deepEqual(result, []);
  });
});
