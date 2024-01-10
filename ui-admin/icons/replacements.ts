const color = (clr: string): Record<string, string> => ({
  [clr]: `{getColor(color) || '${clr}'}`,
})

export default {
  FilterIcon: color('#1F1F27'),
  PlusIcon: color('#1F1F27'),
  ArrowUpIcon: color('#1F1F27'),
  ArrowRightIcon: color('#1F1F27'),
  ArrowDownIcon: color('#1F1F27'),
  ArrowLeftIcon: color('#1F1F27'),
  GiftIcon: color('#6B6F81'),
  MailIcon: color('#1F1F27'),
  MoreIcon: color('#1F1F27'),
  UserIcon: color('#1F1F27'),
}
