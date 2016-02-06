/// <reference path="../../typings/mocha/mocha.d.ts"/>
import createActionType from 'actions/createActionType';
import { assert } from 'chai';

describe('createActionType function', function() {
  it('should create same shape of object what it has been passed', function() {
    // arrange
    const actionType = {
      hello: null,
      world: 0
    };

    // act
    const result = createActionType<typeof actionType>(actionType);

    // assert
    assert.deepEqual(result, {
      hello: 'hello',
      world: 'world'
    });
  });

  it('should create same shape of object even if action types have deep hierarchy', function() {
    // arrange
    const actionType = {
      my: {
        module: {
          has: {
            deep: {
              action: null
            }
          }
        }
      }
    };

    // act
    const result = createActionType<typeof actionType>(actionType);

    // assert
    assert.deepEqual(result, {
      my: {
        module: {
          has: {
            deep: {
              action: 'my.module.has.deep.action'
            }
          }
        }
      }
    });
  });
});
