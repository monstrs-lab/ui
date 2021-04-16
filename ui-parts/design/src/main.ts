// @ts-ignore
const updateEmotionAliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': require.resolve('@emotion/react'),
      'emotion-theming': require.resolve('@emotion/react'),
    },
  },
})

module.exports = {
  stories: ['../../**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    require.resolve('@monstrs/storybook-addon-development-templates'),
  ],
  webpackFinal: async (config) => updateEmotionAliases(config),
}
