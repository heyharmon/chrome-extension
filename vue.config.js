module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      components: {
        background: true,
        contentScripts: true
      },
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
            entries: {
                content: 'src/content.js'
            }
        }
      }
    }
  }
}
