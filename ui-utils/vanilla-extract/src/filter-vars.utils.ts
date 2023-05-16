export const filterEmptyVars = (vars: Record<string, string | undefined>): Record<string, string> =>
  Object.keys(vars).reduce((result, key) => {
    if (vars[key] === undefined || vars[key] === null) {
      return result
    }

    return {
      ...result,
      [key]: vars[key],
    }
  }, {})
