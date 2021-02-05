module.exports = {
  publicPath: '"',
  assetsDir: '/assetstatic',
  runtimeCompiler: true,
  parallel: true,

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}
