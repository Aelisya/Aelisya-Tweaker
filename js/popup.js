document.getElementById('appName').textContent = chrome.i18n.getMessage('appName');
const version = document.getElementById('version');
version.textContent += chrome.i18n.getMessage('version');
version.textContent += " " + chrome.runtime.getManifest().version;
document.getElementById('privacy').textContent = chrome.i18n.getMessage('privacy');
document.getElementById('licence').textContent = chrome.i18n.getMessage('licence');