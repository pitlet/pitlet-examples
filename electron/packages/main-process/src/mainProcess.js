const { app, BrowserWindow, screen, ipcMain } = require('electron')

// disables electron warnings
app.allowRendererProcessReuse = true

if (process.env.NODE_ENV !== 'production') {
  // allow the use of `eval` (necessary for hot reloading)
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
}

app.whenReady().then(() => {
  const display = screen.getPrimaryDisplay()
  const window = new BrowserWindow({
    width: 800,
    height: display.bounds.height,
    x: display.bounds.width - 800,
    y: 0,
    minWidth: 600,
    minHeight: 270,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      sandbox: true,
      preload: `${__dirname}/preload.js`,
    },
    frame: false,
    show: false,
  })

  window.once('ready-to-show', () => {
    window.show()
    window.focus()
  })
  window.loadFile('../../../index.html')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// define ipc methods that the renderer process can invoke
ipcMain.handle('get-os', () => {
  const os = require('os')
  return os.platform()
})
