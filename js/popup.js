document.getElementById('version').textContent=chrome.i18n.getMessage('version')+" "+chrome.runtime.getManifest().version;
document.getElementById('feature').textContent=chrome.i18n.getMessage('feature');
const options=document.getElementById('options');
options.textContent=chrome.i18n.getMessage('options');
options.addEventListener('click',()=>{chrome.runtime.openOptionsPage()});