const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback.assert = false

    config.plugins?.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin())

    config.module?.rules?.forEach((rule) => {
      if (typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.test('test.css')) {
        // eslint-disable-next-line no-param-reassign
        rule.exclude = /\.vanilla\.css$/i
      }
    })

    config.module?.rules?.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false,
          },
        },
      ],
    })

    return config
  },
}
