import TimerInstance from 'utils/timerInstance';
import {Duration} from "models/Duration";

export default class TimerInstanceService {
  private count: number;
  private timerInstances: any;

  constructor(public dispatch: Function, public getState: Object) {
    this.timerInstances = {};
    this.count = 0;
  }

  public startTimer(onTick, onCompleted, duration: Duration): number {
    const seconds = duration.hour * 3600 + duration.minute * 60 + duration.second;
    const timerInstance = new TimerInstance(1000, seconds);
    timerInstance.on('onInstance', onTick.bind(null, this.dispatch, this.getState))
                 .on('onCompleted', onCompleted.bind(null, this.dispatch, this.getState))
                 .start();

    this.timerInstances[this.count] = timerInstance;
    this.count++;
    return this.count;
  }
}