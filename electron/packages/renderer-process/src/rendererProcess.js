module.hot.accept('.')

const { ipcRenderer } = window

const getOs = () => ipcRenderer.invoke('get-os')

console.log('hello world')
;(async () => {
  const os = await getOs()
  document.body.innerHTML = `<h1>Your OS is ${os}</h1>`
})()
