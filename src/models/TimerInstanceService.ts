import TimerInstance from 'utils/timerInstance';

export default class TimerInstanceService {
  private count: number;
  private timerInstances: any;

  constructor(public dispatch) {
    this.timerInstances = {};
    this.count = 0;
  }

  public startTimer(callback): number {
    const timerInstance = new TimerInstance(1000, 10);
    timerInstance.on('onInstance', callback.bind(null, this.dispatch))
                 .start();

    this.timerInstances[this.count] = timerInstance;
    this.count++;
    return this.count;
  }
}