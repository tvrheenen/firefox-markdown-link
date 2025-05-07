// Function that copies the URL of the current tab
function copyPage() {
    browser.tabs.query({ currentWindow: true, active: true })
        .then((tabs) => {
            navigator.clipboard.writeText(`[${tabs[0].title}](${tabs[0].url})`)
        })
}

// Adds the browserAction listener
browser.browserAction.onClicked.addListener(copyPage);