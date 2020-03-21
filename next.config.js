require('dotenv').config()
module.exports = {
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )
    return config
  },
}
