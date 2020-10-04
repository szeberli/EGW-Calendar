const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let win

// Load text File
var fs = require('fs');
var readStream = fs.createReadStream(path.join(__dirname) + '/link.txt', 'utf8');
let data = ''
readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    console.log("Data from link.txt", data);
    // Set Globale Varialbe
    global.var_url = data;
});


// })
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 800})
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
    }
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
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
});