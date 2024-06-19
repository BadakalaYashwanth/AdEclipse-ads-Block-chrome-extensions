document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('whitelist', (data) => {
        document.getElementById('whitelist').value = data.whitelist || '';
    });

    document.getElementById('save').addEventListener('click', () => {
        const whitelist = document.getElementById('whitelist').value;
        chrome.storage.sync.set({ whitelist: whitelist });
        alert('Options saved');
    });
});
