AdEclipse  Chrome extension

https://github.com/BadakalaYashwanth/AdEclipse-ads-Block-chrome-extensions/assets/170221536/763b44d0-c6ff-4bbb-8dc1-2e5f951d98cd   


Certainly! Here are five key points about your Chrome extension project:
# AdEclipse

AdEclipse is a Chrome extension that blocks ads using the declarativeNetRequest API. It targets specific ad-serving domains to provide a cleaner browsing experience.

1. **Ad Blocking Functionality**:
   - The extension is designed to block ads by using the `declarativeNetRequest` API.
   - It targets specific ad-serving domains like `doubleclick.net` and `googleadservices.com`.

2. **Manifest Version 3**:
   - The project uses Manifest Version 3, which introduces new security and performance improvements.
   - This version replaces background pages with service workers for better resource management.

3. **Declarative Net Request Rules**:
   - The extension's blocking rules are defined in a `rules.json` file.
   - Each rule specifies a URL filter and an action (block) to be taken when a request matches the filter.

4. **Permissions**:
   - The extension requires the `declarativeNetRequest` permission to block network requests.
   - This permission allows the extension to specify rules for modifying network requests without needing direct access to the network.

5. **Simplicity and Extensibility**:
   - The project is simple and easy to understand, making it suitable for beginners.
   - It can be easily extended by adding more blocking rules or additional features such as user configuration options or a popup interface.

## Features

- Blocks ads from specific domains
- Popup UI to enable/disable ad blocking
- Options page to manage whitelisted URLs
- Uses Manifest Version 3 for enhanced security and performance

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the project folder.

## Usage

- Click the extension icon to open the popup.
- Use the buttons to enable or disable ad blocking.
- Manage whitelisted URLs from the options page.

## Context Menu Integration

AdEclipse provides a convenient way to quickly enable/disable ad blocking or add the current site to the whitelist using the context menu.

### Enabling/Disabling Ad Blocking

1. Right-click anywhere on a webpage.
2. Select "AdEclipse: Enable Ad Blocking" or "AdEclipse: Disable Ad Blocking" from the context menu.

### Adding Current Site to Whitelist

1. Right-click anywhere on a webpage.
2. Select "AdEclipse: Add Current Site to Whitelist" from the context menu.

