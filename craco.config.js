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
              "@layout-header-background": "#fff",
              "@layout-header-height": "112px",
              "@form-item-margin-bottom": "12px",
              "@layout-sider-background": "#000C17",
              "@menu-dark-bg": "@layout-sider-background",
              "@layout-footer-background": "#fff",
              "@layout-footer-padding": "24px 0"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};