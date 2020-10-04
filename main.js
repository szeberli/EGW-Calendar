const { app, BrowserWindow, remote } = require('electron')
// const electron = require('electron')
// const ipc = require('electron').ipcMain;
// Module to control application life.
// const app = electron.app
// Module to create native browser window.
// const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let win

// ipc.on('reply', (event, message) => {
// 	console.log(event, message);
// 	mainWindow.webContents.send('messageFromMain', `This is the message from the second window: ${message}`);
// })
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 800})
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
    webPreferences: {
      nodeIntegration: true,
    }
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    // mainWindow = null;
    // win = null;
    app.quit(0)
  })
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
// console.log(BrowserWindow.getAllWindows)

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  win = null
  // process.exit(1)
  app.quit(0)
})