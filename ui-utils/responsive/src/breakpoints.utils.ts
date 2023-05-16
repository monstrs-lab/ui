export const getMaybeBreakpointValue = (value, index: number): string | undefined => {
  if (Array.isArray(value)) {
    return value[index]
  }

  if (index === 0) {
    return value
  }

  return undefined
}
