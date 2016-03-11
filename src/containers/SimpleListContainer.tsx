import * as React from 'react';
import { connect } from "react-redux";

const SimpleListContainer = (listName) => (mapStateToProps = null, mapDispatchToProps = null) => (component) => {
  const _mapStateToProps = function _mapStateToProps(dispatch) {
    return Object.assign({}, mapStateToProps(dispatch));
  };

  return connect()(component);
};

export default SimpleListContainer;