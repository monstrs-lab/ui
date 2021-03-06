export const managerEntries = (entry = []) => [
  ...entry,
  require.resolve('@monstrs/storybook-addon-development-templates/register'),
]
