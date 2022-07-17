export function notEmptyStringOrDefault(value: string): string {
  return typeof value === 'string' ? value.trim() : ''
}
