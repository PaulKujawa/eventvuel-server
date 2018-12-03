import { Configuration } from 'webpack';
const Dotenv = require('dotenv-webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

export const webpackConfig = () => {
    const config: Configuration = {
        mode: 'none',
        context: path.resolve(__dirname, 'src'), // used by entry points and loaders
        entry: {
            main: './main.ts',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                },
                {
                    test: /\.gql$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader'
                },
            ],
        },
        plugins: [
            new Dotenv(),
        ],
        externals: [
            nodeExternals(),
        ],
        resolve: {
            extensions: ['.ts', '.mjs', '.js'],
            plugins: [
                new TsconfigPathsPlugin({configFile: "./tsconfig.json"}),
            ],
        },
    };

    return config;
}