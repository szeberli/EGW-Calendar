const {app, screen } = require('electron');
// const ipc = require('electron').ipcRenderer;
const BrowserWindow = require('electron').remote.BrowserWindow;
const openSecondWindowButton = document.getElementById('open-second-window');

// require('electron').remote.getCurrentWindow().on('close', evt => evt.preventDefault())

// let win
openSecondWindowButton.addEventListener('click', (event) => {
	  let displays = screen.getAllDisplays()
	  let externalDisplay = displays.find((display) => {
		return display.bounds.x !== 0 || display.bounds.y !== 0
	  })
	  if (externalDisplay) {
		win = new BrowserWindow({
		  x: externalDisplay.bounds.x + 50,
		  y: externalDisplay.bounds.y + 50,
		  // show: false,
		  width: 800,
		  height: 600,
		  fullscreen: true,
		  frame: false,
		  autoHideMenuBar: true,
		  kiosk: true,
		  webPreferences: {
		    nodeIntegration: true,
		  }
		})
		win.loadURL('https://egw.computech.dev/screen');
		// win.webContents.openDevTools()
	}
});
app.on('window-all-closed', () => {
	app.quit()
  })