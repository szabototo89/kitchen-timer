import * as React from 'react';
import Button from 'common/button';
import { SimpleList } from 'reducers/simpleListFactory';
import TimerPresetListContainer from 'containers/TimerPresetListContainer';

const List = ({ elements, addElement }) => (
  <div>
    {elements.map((element, index) => <div key={index}>{element}</div>)}
    <Button onClick={addElement.bind(null, elements.length + 1)}>Add</Button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    elements: state
  };
};

const mapDispatchToProps = (dispatch, { addElement, removeElement }) => {
  return {
    addElement(element) {
      dispatch(addElement(element));
    }
  };
};

const ListContainer = SimpleList('my-list')(mapStateToProps, mapDispatchToProps)(List);
const ListContainer2 = SimpleList('my-list-2')(mapStateToProps, mapDispatchToProps)(List);

const App = () => (
  <div>
    <TimerPresetListContainer name="timerPresets"/>
  </div>
);

export default App;