import {TimerPreset} from "models/TimerPreset";
import {Duration} from "models/Duration";
import TimerInstance from "utils/timerInstance";

export enum ActiveTimerMode {
  STOPPED, COUNTING, PAUSED
}

export default class ActiveTimer {
  constructor(public id: string,
              public timerPreset: TimerPreset,
              public mode: ActiveTimerMode = ActiveTimerMode.STOPPED,
              public currentValue: Duration = timerPreset.duration) {
  }
}