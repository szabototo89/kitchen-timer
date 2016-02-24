/// <reference path="../../typings/mocha/mocha.d.ts"/>

import { assert } from 'chai';
import listControlReducerFactory from 'reducers/listControlReducerFactory';

describe('listControlReducerFactory', function() {
  it('should be registered when calling factory itself', function () {
    // arrange
    const initialState = {
      timers: []
    };
    const underTest = listControlReducerFactory()('my-list', initialState);

    // act
    const result = underTest(null, null);

    // assert
    assert.deepEqual(result, initialState);
  });

  
});
