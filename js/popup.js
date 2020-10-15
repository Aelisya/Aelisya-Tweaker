document.getElementById('appName').textContent = chrome.i18n.getMessage('appName');
let version = document.getElementById('version');
version.textContent += chrome.i18n.getMessage('version');
version.textContent += " " + chrome.runtime.getManifest().version;
document.getElementById('dev').textContent = chrome.i18n.getMessage('about');