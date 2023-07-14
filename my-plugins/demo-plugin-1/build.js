module.exports = {
  plugins: [
    'build-plugin-fusion',
    [
      '@alilc/build-plugin-alt',
      {
        type: 'plugin',
        // 开启注入调试模式，see：https://lowcode-engine.cn/site/docs/guide/expand/editor/cli
        inject: true,
        openUrl: 'http://localhost:5556?debug'
        // 配置要打开的页面，在注入调试模式下，不配置此项的话不会打开浏览器
        // 支持直接使用官方 demo 项目：https://lowcode-engine.cn/demo/demo-general/index.html
        // openUrl: 'https://lowcode-engine.cn/demo/demo-general/index.html?debug',
      }
    ]
  ]
}
