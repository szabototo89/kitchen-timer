interface EventHandler {
  [eventHandlerName: string]: Array<Function>;
}

export default class TimerInstance {
  private eventHandler:EventHandler;
  private count:number;
  private isPaused: boolean;

  constructor(public interval: number, public steps: number) {
    this.eventHandler = {};
    this.count = 0;
    this.isPaused = false;
  }

  public on(eventHandlerName:string, callback:Function):this {
    if (!this.eventHandler[eventHandlerName]) {
      this.eventHandler[eventHandlerName] = [];
    }

    this.eventHandler[eventHandlerName].push(callback);
    return this;
  }

  public off(eventHandlerName:string, callback:Function):this {
    if (!this.eventHandler[eventHandlerName]) return this;

    this.eventHandler[eventHandlerName] = this.eventHandler[eventHandlerName].filter(cb => cb !== callback);
    return this;
  }

  private currentTime() {
    return new Date().getTime();
  }

  private fireOnCompleted(steps, count) {
    const onCompleted = this.eventHandler['onCompleted'];
    if (!onCompleted) return;

    for (const event of onCompleted) {
      event(steps, count);
    }
  }

  private fireOnInstance(steps, count) {
    const onInstance = this.eventHandler['onInstance'];
    if (!onInstance) return false;

    for (const event of onInstance) {
      const result = event(steps, count);
      if (!result) return false;
    }

    return true;
  }

  public start() {
    let { interval, steps } = this;
    let start = this.currentTime(),
        time = 0,
        count = 0;

    //const steps = (length / 100) * (resolution / 10);
    //const speed = length / steps;

    function instance() {
      if (this.isPaused) return;

      count += 1;
      time += interval;

      if (count === steps) {
        this.fireOnInstance(steps, count);
        this.fireOnCompleted(steps, count);
      }
      else {
        const isPaused = this.fireOnInstance(steps, count);

        if (!isPaused) {
          const diff = (this.currentTime() - start) - time;
          window.setTimeout(instance.bind(this), (interval - diff));
        }
      }
    }

    window.setTimeout(instance.bind(this), interval);
  }

  public pause(): this {
    this.isPaused = true;
    return this;
  }

  public resume(): this {
    this.isPaused = false;
    return this;
  }
}