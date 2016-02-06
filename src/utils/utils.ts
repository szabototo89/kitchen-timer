export function isDefined<T>(value: T): boolean {
  return value !== undefined && value != null;
}

export function getValueOrDefault<T>(value: T, defaultValue: T = null): T {
  return isDefined(value) ? value : defaultValue;
}