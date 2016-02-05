export default class IdGenerator {
  private id: number;

  constructor(private prefix: string = null) {
    this.id = 0;
  }

  public getId(): string {
    this.id = this.id + 1;
    return this.prefix + this.id;
  }
}