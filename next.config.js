/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// const withImages = require("next-images");
// module.exports = withImages();

// function defineNextConfig(config) {
//   return config;
// }

// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

// config.module.rules = [
//   ...config.module.rules.map(rule => {
//     if (/svg/.test(rule.test)) {
//       // Silence the Storybook loaders for SVG files
//       return { ...rule, exclude: /\.svg$/i }
//     }

//     return rule
//   }),
//   // Add your custom SVG loader
//   {
//     test: /\.svg$/i,
//     use: ['whatever-loader-you-want']
//   }
// ]

module.exports = {
  webpack: (config) => {
    config.module.rules.map((rule) => {
      if (/svg/.test(rule.test)) {
        // Silence the Storybook loaders for SVG files
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    }),
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    return config;
  },
};
