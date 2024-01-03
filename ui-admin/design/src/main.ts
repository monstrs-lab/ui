import type { TransformOptions } from '@babel/core'
import type { Configuration }    from 'webpack'

import { createRequire }         from 'node:module'
import { join }                  from 'node:path'
import { dirname }               from 'node:path'

import { VanillaExtractPlugin }  from '@vanilla-extract/webpack-plugin'
import MiniCssExtractPlugin      from 'mini-css-extract-plugin'

const require = createRequire(import.meta.url)

const getAbsolutePath = (value: string): string =>
  dirname(require.resolve(join(value, 'package.json')))

export default {
  stories: ['./**/*.mdx', '../../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  babelDefault: (config: TransformOptions): TransformOptions => ({
    ...config,
    presets: [
      ...config.presets!,
      require.resolve('@babel/preset-typescript'),
      require.resolve('@babel/preset-env'),
    ],
  }),
  webpackFinal: async (config: Configuration): Promise<Configuration> => {
    // eslint-disable-next-line no-param-reassign
    config.resolve!.extensionAlias = {
      '.js': ['.js', '.ts'],
      '.jsx': ['.jsx', '.tsx'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts'],
    }

    config.plugins?.push(
      new VanillaExtractPlugin({
        identifiers: 'short',
      }),
      new MiniCssExtractPlugin()
    )

    config.module?.rules?.forEach((rule) => {
      if (typeof rule !== 'string' && rule !== false && rule !== 0) {
        if (rule!.test instanceof RegExp && rule!.test.test('test.css')) {
          // eslint-disable-next-line no-param-reassign
          rule!.exclude = /\.vanilla\.css$/i
        }
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
