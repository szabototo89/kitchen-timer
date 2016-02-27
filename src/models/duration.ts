export default class Duration {
  constructor(public hours: number = 0, public minutes: number = 0, public seconds: number = 0) {

  }

  public static copy(duration: Duration) {
    return new Duration(duration.hours, duration.minutes, duration.seconds);
  }
}