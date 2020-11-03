# Aelisya Tweaker
![OSSAR](https://github.com/michaelb-ae/Aelisya-Tweaker/workflows/OSSAR/badge.svg)![CodeQL](https://github.com/michaelb-ae/Aelisya-Tweaker/workflows/CodeQL/badge.svg?branch=master)\
Add security and privacy with this extension.

- AMP redirection.
- Noopener Noreferrer Nofollow to _blank link.
- Add modern Scrollbar to the browser (follow system color).
- Blocking ping requests.
- Upgrade insecure request.
- Block CSP_REPORT.
- Block Flash object.
- Block Sentry and Bugsnag.

## Installation
<a href="https://microsoftedge.microsoft.com/addons/detail/aelisya/ackodolhpbogckmcjkfdcgifhigeghkg"><img src="https://raw.githubusercontent.com/aelisya/Aelisya-Tweaker/master/icons/EdgeStore.webp" width="315"></img></a>

## Report a bug or asking for a feature ?
Follow the template or the issue will be closed immediately without reading !

## Manifest V3
The code for supporting manifest V3 is done and work very smoothly but since actually the stable version of Edge don't support it without error the migration is reported.\
I develop new fonctions with the V3 code in mind for a faster update when the stable allow me to migrate.

## Chrome or Firefox
 - For the Firefox Case : Definitely droped, since they just mimic chrome i don't have time to loss to do the port on their plateform.
 - For the Chrome case i don't want to pay a cent to them, but if my extension must be on it (suddenly increase of user i can change my mind).

## Release Notes

### Version 5.0 (DRAFT)
<ul>
<li>Bug correction in AMP on unsecure http</li>
<li>Bug correction in noopener on unsecure http</li>
<li>Bug correction in scrollbar on unsecure http</li>
<li>E-tag tracking protection with DeclarativeNetRequest (preparation for manifest V3)</li>
<li>... Other thing in developement will be added in this draft once finished ...</li>
</ul>

### Version 4.0
<ul>
<li>Block CSP report with DeclarativeNetRequest (preparation for manifest V3)</li>
<li>Block sentry & bugsnag with DeclarativeNetRequest (preparation for manifest V3)</li>
<li>Block Flash object with DeclarativeNetRequest & remove with css(preparation for manifest V3)</li>
<li>Bug correction who doesn't redirect AMP page from another TLD than .com</li>
<li>Bug correction in AMP regexp</li>
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
