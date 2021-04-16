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
  refs: {
    parts: {
      title: 'Parts',
      url: 'https://ui-parts.ui.monstrs.dev',
    },
    proto: {
      title: 'Proto',
      url: 'https://ui-proto.ui.monstrs.dev',
    },
    admin: {
      title: 'Admin',
      url: 'https://ui-admin.ui.monstrs.dev',
    },
  },
  stories: ['./*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => updateEmotionAliases(config),
}
