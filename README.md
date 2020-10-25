# Aelisya Tweaker
Add security and privacy with this extension.

- AMP redirection.
- Noopener Noreferrer Nofollow to _blank link.
- Add modern Scrollbar to the browser (follow system color).
- Blocking ping requests.
- Upgrade insecure request. 

## Installation
<a href="https://microsoftedge.microsoft.com/addons/detail/aelisya/ackodolhpbogckmcjkfdcgifhigeghkg"><img src="https://raw.githubusercontent.com/aelisya/Aelisya-Tweaker/master/icons/EdgeStore.webp" width="315"></img></a>

## Report a bug or asking for a feature ?
Follow the template or the issue will be closed immediately without reading !

## Release Notes

### Version 3.1
<ul>
<li>Bug correction who doesn't redirect AMP page from another TLD than .com</li>
</ul>

### Version 3.0
<ul>
<li>Blocking ping requests with declarativeNetRequest (Preparation for Manifest V3)</li>
<li>Upgrade insecure (http) request with declarativeNetRequest for defeat mixed contents (Preparation for Manifest V3)</li>
<li>Add link to report bug or asking for news features</li>
<li>Change permission to all https (if you want to upgrade http to https on an https page we have to have right to do so)</li>
</ul>

### Version 2.1
<ul>
<li>Rewriting AMP redirection from scratch with declarativeNetRequest instead of webrequest (Preparation for Manifest V3)</li>
<li>Rewriting CSP for more security (Preparation for Manifest V3)</li>
<li>Removing redirector background script (for AMP redirect) replaced by declarativeNetRequest</li>
<li>Protect the page in case of error of the extension</li>
<li>Reintegration of previously removed integrity-check for the popup</li>
<li>Adding support for color change who follow browser/os preference to scrollbar</li>
<li>Various optimizations for some js and manifest to try to improve speed and security</li>
<li>Temporary drop the support of Firefox since they don't implement declarativeNetRequest</li>
<li>Adapting Scrollbar to edge system's settings one</li>
<li>Licence Modified from all right reserved to CC BY-NC-ND 4.0 (Only apply on V2 when it will be finished prior this all right reserved is applicable)</li>
</ul>
