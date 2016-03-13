export class Duration {
  constructor(public hour: number, public minute: number, public second: number) {

  }

  public static add(that: Duration, other: Duration): Duration {
    const hour = that.hour + other.hour;
    const minute = that.minute + other.minute;
    const second = that.second + other.second;

    return new Duration(hour, minute, second);
  }
}