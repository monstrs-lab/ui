import { assignInlineVars }        from '@vanilla-extract/dynamic'

import { getMaybeBreakpointValue } from '@ui-utils/responsive'
import { filterEmptyVars }         from '@ui-utils/vanilla-extract'

import { LayoutProps }             from './layout.interfaces'
import { vars }                    from './layout.css'

export const assignLayoutVars = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  display,
  verticalAlign,
  overflowX,
  overflowY,
  overflow,
}: LayoutProps) =>
  assignInlineVars(
    filterEmptyVars({
      [vars.width]: getMaybeBreakpointValue(width, 0),
      [vars.widthTablet]: getMaybeBreakpointValue(width, 1),
      [vars.widthPhone]: getMaybeBreakpointValue(width, 2),

      [vars.height]: getMaybeBreakpointValue(height, 0),
      [vars.heightTablet]: getMaybeBreakpointValue(height, 1),
      [vars.heightPhone]: getMaybeBreakpointValue(height, 2),

      [vars.minWidth]: getMaybeBreakpointValue(minWidth, 0),
      [vars.minWidthTablet]: getMaybeBreakpointValue(minWidth, 1),
      [vars.minWidthPhone]: getMaybeBreakpointValue(minWidth, 2),

      [vars.minHeight]: getMaybeBreakpointValue(minHeight, 0),
      [vars.minHeightTablet]: getMaybeBreakpointValue(minHeight, 1),
      [vars.minHeightPhone]: getMaybeBreakpointValue(minHeight, 2),

      [vars.maxWidth]: getMaybeBreakpointValue(maxWidth, 0),
      [vars.maxWidthTablet]: getMaybeBreakpointValue(maxWidth, 1),
      [vars.maxWidthPhone]: getMaybeBreakpointValue(maxWidth, 2),

      [vars.maxHeight]: getMaybeBreakpointValue(maxHeight, 0),
      [vars.maxHeightTablet]: getMaybeBreakpointValue(maxHeight, 1),
      [vars.maxHeightPhone]: getMaybeBreakpointValue(maxHeight, 2),

      [vars.display]: getMaybeBreakpointValue(display, 0),
      [vars.displayTablet]: getMaybeBreakpointValue(display, 1),
      [vars.displayPhone]: getMaybeBreakpointValue(display, 2),

      [vars.verticalAlign]: verticalAlign as string,
      [vars.overflowX]: overflowX,
      [vars.overflowY]: overflowY,
      [vars.overflow]: overflow,
    })
  )
