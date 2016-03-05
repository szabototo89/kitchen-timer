// <reference path="../../typings/mocha/mocha.d.ts"/>

import { assert } from 'chai';
import simpleListReducer, { addElement } from 'reducers/simpleListReducer';

declare function describe(message: string, callback: Function);
declare function it(message: string, callback: Function);

describe('simpleListReducer', function() {

  const underTest = simpleListReducer();

  it('should return with initial state when passing null state', function () {
    // arrange

    // act
    const result = underTest(null, null);

    // assert
    assert.deepEqual(result, []);
  });

  it('should create a new list and add element when passing a new element to a not existing list', function() {
    // arrange
    // act
    const result = underTest({ }, addElement('my-list')(1));

    // assert
    assert.deepEqual(result, [1]);
  });
});
