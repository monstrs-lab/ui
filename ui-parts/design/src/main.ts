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
  managerWebpack: async (config) => {
    config.module.rules.push({
      test: /@storybook\/router\/dist\/(esm|cjs)\/utils\.js/,
      loader: require.resolve('string-replace-loader'),
      options: {
        search: '/^[a-zA-Z0-9 _-]*$/',
        replace: '/^[a-zA-Z0-9 (),_-]*$/',
      },
    })

    return config
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /@storybook\/core-client\/dist\/(esm|cjs)\/preview\/parseArgsParam\.js/,
      loader: require.resolve('string-replace-loader'),
      options: {
        search: '/^[a-zA-Z0-9 _-]*$/',
        replace: '/^[a-zA-Z0-9 (),_-]*$/',
      },
    })

    return updateEmotionAliases(config)
  },
}
