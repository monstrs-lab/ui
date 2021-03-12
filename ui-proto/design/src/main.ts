// @ts-ignore
const updateEmotionAliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': require.resolve('@emotion/react'),
      '@emotion/styled': require.resolve('@emotion/styled'),
      '@emotion/styled-base': require.resolve('@emotion/styled'),
      'emotion-theming': require.resolve('@emotion/react'),
    },
  },
})

module.exports = {
  stories: ['../../**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: updateEmotionAliases,
}
