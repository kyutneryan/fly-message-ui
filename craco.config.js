const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#38D996",
              "@layout-header-padding": "0 48px",
              "@layout-header-background": "#000C17",
              "@layout-header-height": "112px",
              "@form-item-margin-bottom": "12px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};