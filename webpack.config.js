import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('webpack').Configuration} */
const config = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/u,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
        exclude: /node_modules/u,
      },
      {
        test: /\.css$/iu,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
