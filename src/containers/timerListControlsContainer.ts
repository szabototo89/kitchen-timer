import { connect } from 'react-redux';
import TimerListControls from 'components/timerListControls';
import {addTimerToList, removeTimer} from "actions/timerListActions";

function mapDispatchToProps(dispatch) {
  return {
    onTimerAdd() {
      dispatch(addTimerToList());
    }
  };
}

export default connect(null, mapDispatchToProps)(TimerListControls as any);