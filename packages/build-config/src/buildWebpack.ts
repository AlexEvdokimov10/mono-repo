import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';


export function buildWebpack(options:BuildOptions):webpack.Configuration {

  const {mode,paths} = options
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules:buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool:isDev ? "eval-cheap-source-map" : 'source-map',
    devServer:isDev ? buildDevServer(options):undefined
  }
}