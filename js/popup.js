const i18n = chrome.i18n;
const manifest = chrome.runtime.getManifest();
const appname = document.getElementById('appName');
const version = document.getElementById('version');
const privacy = document.getElementById('privacy');
const licence = document.getElementById('licence');

version.textContent = i18n.getMessage('version') + " " + manifest.version;
privacy.textContent = i18n.getMessage('privacy');
licence.textContent = i18n.getMessage('licence');
appname.textContent = manifest.name;