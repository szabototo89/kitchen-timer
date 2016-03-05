// <reference path="../../typings/mocha/mocha.d.ts"/>

import { assert } from 'chai';
import timerPresetsReducer, {addTimerPreset, removeTimerPreset} from 'reducers/timerPresetsReducer';

declare function describe(message: string, callback: Function);
declare function it(message: string, callback: Function);

describe('timerPresetsReducer', function() {

  const underTest: Function = timerPresetsReducer;

  it('should return with initial state when passing null state', function () {
    // arrange

    // act
    const result = underTest(null, null);

    // assert
    assert.deepEqual(result, []);
  });

  it('should add a new element to time presets when calling addTimerPreset action creator', function() {
    // arrange
    const action = addTimerPreset(1);

    // act
    const result = underTest({}, action);

    // assert
    assert.deepEqual(result, [ 1 ]);
  });

  it('should remove a selected element from time presets when calling removeTimerPreset action creator', function() {
    // arrange
    const initialState = underTest({}, addTimerPreset(1));
    const action = removeTimerPreset(1);

    // act
    const result = underTest(initialState, action);

    // assert
    assert.deepEqual(result, []);
  });
});
