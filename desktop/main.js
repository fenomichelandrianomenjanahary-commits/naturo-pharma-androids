const { app, BrowserWindow, dialog, session } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 900,
    minHeight: 650,
    title: "NaturoPharma",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
  session.defaultSession.on("will-download", async (_event, item) => {
    const suggested = item.getFilename() || "NaturoPharma-sauvegarde.json";
    const result = await dialog.showSaveDialog({
      title: "Enregistrer la sauvegarde NaturoPharma",
      defaultPath: path.join(app.getPath("documents"), suggested),
      buttonLabel: "Enregistrer"
    });
    if (result.canceled || !result.filePath) {
      item.cancel();
      return;
    }
    item.setSavePath(result.filePath);
  });

  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
