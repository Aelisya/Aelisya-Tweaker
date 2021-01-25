# Aelisya Tweaker
![OSSAR](https://github.com/Aelisya/Aelisya-Tweaker/workflows/OSSAR/badge.svg)![CodeQL](https://github.com/Aelisya/Aelisya-Tweaker/workflows/CodeQL/badge.svg?branch=master)\
Add security and privacy with this extension.

- AMP redirection.
- Add modern Scrollbar to the browser (follow system color).
- Blocking ping requests.
- Block CSP_REPORT.
- Block Sentry and Bugsnag.
- E-Tag Track protection.

## Installation
<a href="https://microsoftedge.microsoft.com/addons/detail/aelisya/ackodolhpbogckmcjkfdcgifhigeghkg"><img src="https://raw.githubusercontent.com/Aelisya/Aelisya-Tweaker/master/icons/EdgeStore.webp"></img></a>

## Report a bug or asking for a feature ?
Follow the template or the issue will be closed immediately without reading !

## I have follow all your rules why my push is refused ?
From 13/11/2020 all Commit or push request must be signed (green validated) or it will be refused.\
Why 13/11 because it's the date when i have applied this rules.

## Manifest V3
The code for supporting manifest V3 is done and work very smoothly edge 88 support majority of it's code, normally i will publish it with 89 if they integrate it (manifest v3), the package is already uploaded waiting for publication.

## Release Notes

### V 6.2
<ul>
<li>Removing noopener since edge do it automatically</li>
<li>Removing updgrade insecure request since edge do it automatically</li>
<li>Removing block of flash objet since flash insn't present anymore on W10 and edge</li>
</ul>

### V 6.0
<ul>
<li>Some tweak and removing option</li>
<li>Bug correction</li>
<li>light version for AdGuard Windows with userscript to compensate the script removed from light version for a better privacy/security</li>
<li>the light version don't iclude js or redirection so they don't ask for any permission at all</li>
</ul>

### V 5.0
<ul>
<li>Bug correction in AMP on unsecure http</li>
<li>Bug correction in noopener on unsecure http</li>
<li>Bug correction in scrollbar on unsecure http</li>
<li>E-tag tracking protection with DeclarativeNetRequest (preparation for manifest V3)</li>
<li>Removing nofollow addition in _blank link</li>
<li>Minor performance optimization</li>
<li>Adding option page (empty for now)</li>
<li>Design change of the popup page</li>
<li>Privacy policy moved on the store page for a better transparency</li>
</ul>

### V 4.0
<ul>
<li>Block CSP report with DeclarativeNetRequest (preparation for manifest V3)</li>
<li>Block sentry & bugsnag with DeclarativeNetRequest (preparation for manifest V3)</li>
<li>Block Flash object with DeclarativeNetRequest & remove with css(preparation for manifest V3)</li>
<li>Bug correction who doesn't redirect AMP page from another TLD than .com</li>
<li>Bug correction in AMP regexp</li>
</ul>

### V 3.0
<ul>
<li>Blocking ping requests with declarativeNetRequest (Preparation for Manifest V3)</li>
<li>Upgrade insecure (http) request with declarativeNetRequest for defeat mixed contents (Preparation for Manifest V3)</li>
<li>Add link to report bug or asking for news features</li>
<li>Change permission to all https (if you want to upgrade http to https on an https page we have to have right to do so)</li>
</ul>

### V 2.1
<ul>
<li>Rewriting AMP redirection from scratch with declarativeNetRequest instead of webrequest (Preparation for Manifest V3)</li>
<li>Rewriting CSP for more security (Preparation for Manifest V3)</li>
<li>Removing redirector background script (for AMP redirect) replaced by declarativeNetRequest</li>
<li>Protect the page in case of error of the extension</li>
<li>Reintegration of previously removed integrity-check for the popup</li>
<li>Adding support for color change who follow browser/os preference to scrollbar</li>
<li>Various optimizations for some js and manifest to try to improve speed and security</li>
<li>Adapting Scrollbar to edge system's settings one</li>
</ul>
