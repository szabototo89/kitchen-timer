import {TimerPreset} from "models/TimerPreset";

enum ActiveTimerMode {
  STOPPED, COUNTING, PAUSED
}

export default class ActiveTimer {
  constructor(public timerPreset: TimerPreset, public mode: ActiveTimerMode = ActiveTimerMode.STOPPED) {  }
}