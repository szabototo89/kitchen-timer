import * as React from 'react';
import {connect} from "react-redux";
import { addElement, removeElement } from 'reducers/listFeatureReducer';

const ListContainer = ({ name, propName = null, onElementAddEventName = null, onElementRemoveEventName = null }) => (component) => {
  const _propName = propName || 'elements';
  const _onElementAddEventName = onElementAddEventName || 'onElementAdd';
  const _onElementRemoveEventName = onElementRemoveEventName || 'onElementRemove';

  const mapStateToProps = (state) => {
    const { lists } = state;
    const currentList = lists[name];
    //if (!currentList) throw new Error(`Cannot find any list with name ${name}`);

    return {
      [_propName]: currentList || []
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      [_onElementAddEventName](element) {
        dispatch(addElement(name, element));
      },

      [_onElementRemoveEventName](element) {
        dispatch(removeElement(name, element));
      }
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default ListContainer;