const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#C8102E",
              "@heading-color": "#C8102E",
              "@font-family": "Roboto",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
