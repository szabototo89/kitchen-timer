import Duration from "models/duration";

export default class Timer {
  constructor(public id: string, public name: string, public duration: Duration) { }
}