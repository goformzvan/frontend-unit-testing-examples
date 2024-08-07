export function getCountStatusThrows(count: number): string {
  if (count > 0 && count % 17 === 0) {
    throw new Error('Count cannot be divisible by 17');
  }

  return `Current count is ${count}`;
}
