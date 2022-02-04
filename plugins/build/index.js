/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = function (context, options) {
  return {
    name: "build",
    configureWebpack(config, isServer) {
      return {
        resolve: {
          fallback: {
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
            crypto: require.resolve("crypto-browserify"),
            assert: require.resolve("assert"),
            buffer: require.resolve("buffer"),
          },
        },
      };
    },
  };
};
