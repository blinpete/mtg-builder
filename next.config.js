// const WebpackQRCodePlugin = require("webpack-dev-server-qr-code")
// import { RsdoctorWebpackPlugin } from "@rsdoctor/webpack-plugin"
// const { RsdoctorWebpackPlugin } = require("@rsdoctor/webpack-plugin")

// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
  openAnalyzer: false,
  analyzerMode: "json",
})

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  images: {
    dangerouslyAllowSVG: true,
    domains: ["svgs.scryfall.io", "cards.scryfall.io"],
  },
  experimental: {
    // turbo: {},
    // typedRoutes: true,
  },

  webpack: (config, options) => {
    config.devServer = {
      port: 3000,
      host: "0.0.0.0",
    }

    config.plugins = [
      ...(config.plugins || []),

      // https://github.com/webpack-contrib/webpack-bundle-analyzer?tab=readme-ov-file#options-for-plugin
      // new BundleAnalyzerPlugin({
      //   generateStatsFile: true,
      // }),

      // new WebpackQRCodePlugin({ size: "small" }),

      // new RsdoctorWebpackPlugin({
      //   // https://rsdoctor.dev/config/options/options#options-1
      //   // plugin options
      // }),
    ]
    return config
  },
})

module.exports = nextConfig
