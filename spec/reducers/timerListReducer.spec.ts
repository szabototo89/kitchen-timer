/// <reference path="../../typings/mocha/mocha.d.ts"/>

import { assert } from 'chai';


describe('timerListReducer', function() {
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
});


