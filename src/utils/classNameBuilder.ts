export default class ClassNameBuilder {
  constructor(private blockName: string) { }

  public element(name: string, ...modifiers: Array<string>): string {
    const elementName = `${this.blockName}__${name}`;
    const elementModifiers = modifiers.map(modifier => `${elementName}--${modifier}`);
    return [ elementName, ...elementModifiers ].join(' ');
  }
}