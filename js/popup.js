const i18n = chrome.i18n;
const manifest = chrome.runtime.getManifest();
const version = document.getElementById('version');
const privacy = document.getElementById('privacy');
const licence = document.getElementById('licence');
const feature = document.getElementById('feature');

version.textContent = i18n.getMessage('version') + " " + manifest.version;
privacy.textContent = i18n.getMessage('privacy');
licence.textContent = i18n.getMessage('licence');
feature.textContent = i18n.getMessage('feature');