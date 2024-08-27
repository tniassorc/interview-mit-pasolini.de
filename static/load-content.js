// load-content.js
document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML content into a placeholder
    function loadHTMLContent(container) {
        const url = container.getAttribute('data-content-url');
        if (!url) return; // Exit if no URL is provided

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading HTML content:', error);
            });
    }

    // Find all placeholders and load content
    document.querySelectorAll('[data-content-url]').forEach(container => {
        loadHTMLContent(container);
    });
});
