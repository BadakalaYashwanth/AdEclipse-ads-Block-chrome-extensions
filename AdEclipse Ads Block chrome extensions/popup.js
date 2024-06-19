document.getElementById('enable').addEventListener('click', () => {
    chrome.storage.sync.get('whitelist', (data) => {
        const whitelist = data.whitelist ? data.whitelist.split(',') : [];
        chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: ['ruleset_1'] }, () => {
            chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds: whitelist.map((_, index) => index + 1),
                addRules: whitelist.map((url, index) => ({
                    id: index + 1,
                    priority: 1,
                    action: { type: 'allow' },
                    condition: { urlFilter: `*://${url.trim()}/*` }
                }))
            });
            alert('Ad blocking enabled with whitelisting');
        });
    });
});

document.getElementById('disable').addEventListener('click', () => {
    chrome.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: ['ruleset_1'] });
    alert('Ad blocking disabled');
});
