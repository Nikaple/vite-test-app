const demo = async () => {
  // 使用 await import 动态导入 fingerprint 模块
  // 这样打包后 src/fingerprint.js 就会独立为一个模块打包
  // 打包后有两个 JS 文件
  // index.xxxxx.js 包含 demo.js 中的 demo 代码，自测使用不发布，也不占用包体积
  // fingerprint.xxxxx.js 包含 fingerprint.js 的库源码，只用发布该文件即可
  const { fingerprint } = await import('./src/fingerprint')
  document.body.innerHTML = `Your fingerprint is: ${fingerprint()}`
}

demo();