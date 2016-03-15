export class Duration {
  constructor(public hour: number, public minute: number, public second: number) {

  }

  public static add(that: Duration, other: Duration): Duration {
    let hour = that.hour + other.hour;
    let minute = that.minute + other.minute;
    let second = that.second + other.second;

    if (minute < 0) {
      hour = hour - 1;
      minute = 60 + minute;
    }

    if (second < 0) {
      minute = minute - 1;
      second = 60 + second;
    }

    return new Duration(hour, minute, second);
  }
}