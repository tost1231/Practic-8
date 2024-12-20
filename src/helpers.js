let counter = {};

export function getId(prefix = 'key') {
  if (!counter[prefix]) {
    counter[prefix] = 0;
  }
  counter[prefix] += 1;
  return `${prefix}_${counter[prefix]}`;
}
