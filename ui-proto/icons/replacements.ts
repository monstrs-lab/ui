const color = (clr: string): Record<string, string> => ({
  [clr]: `{getColor(color) || '${clr}'}`,
})

export default {
  CloseIcon: color('#1F1F27'),
  ArrowUpIcon: color('#1F1F27'),
  ArrowRightIcon: color('#1F1F27'),
  ArrowDownIcon: color('#1F1F27'),
  ArrowLeftIcon: color('#1F1F27'),
}
