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
  core: {
    builder: 'webpack5',
  },
  stories: ['../../**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    require.resolve('@monstrs/storybook-addon-development-templates'),
  ],
  managerWebpack: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      assert: require.resolve('assert/'),
      util: require.resolve('util/'),
      ...(config.resolve.fallback || {}),
    }

    return config
  },
  webpackFinal: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      assert: require.resolve('assert/'),
      util: require.resolve('util/'),
      ...(config.resolve.fallback || {}),
    }

    return updateEmotionAliases(config)
  },
}
