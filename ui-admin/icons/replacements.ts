const color = (clr: string): Record<string, string> => ({
  [clr]: `{getColor(color) || '${clr}'}`,
})

export default {
  FilterIcon: color('#1F1F27'),
  PlusIcon: color('#1F1F27'),
}
