const i18n = chrome.i18n;
const manifest = chrome.runtime.getManifest();
const version = document.getElementById('version');
const options = document.getElementById('options');
const feature = document.getElementById('feature');
version.textContent = i18n.getMessage('version') + " " + manifest.version;
options.textContent = i18n.getMessage('options');
feature.textContent = i18n.getMessage('feature');
options.addEventListener('click',()=>{
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    }
});