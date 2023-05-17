import type { Properties } from 'csstype'

export interface BorderProps {
  borderRadius?:
    | Properties['borderRadius']
    | [Properties['borderRadius'], Properties['borderRadius'], Properties['borderRadius']]
  borderColor?:
    | Properties['borderColor']
    | [Properties['borderColor'], Properties['borderColor'], Properties['borderColor']]
  borderTop?:
    | Properties['borderTop']
    | [Properties['borderTop'], Properties['borderTop'], Properties['borderTop']]
  borderRight?:
    | Properties['borderRight']
    | [Properties['borderRight'], Properties['borderRight'], Properties['borderRight']]
  borderBottom?:
    | Properties['borderBottom']
    | [Properties['borderBottom'], Properties['borderBottom'], Properties['borderBottom']]
  borderLeft?:
    | Properties['borderLeft']
    | [Properties['borderLeft'], Properties['borderLeft'], Properties['borderLeft']]
}
