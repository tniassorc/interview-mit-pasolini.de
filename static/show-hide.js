document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Function to hide all blocks with reverse animation
    function hideBlocks() {
        document.querySelectorAll('.content-block.active').forEach(block => {
            block.classList.remove('active');
            setTimeout(() => {
                block.style.display = 'none'; // Hide the block after the animation
            }, 500); // Delay to match the CSS transition duration
        });
    }

    // Function to show a specific block based on the selector
    function showBlock(selector) {
        hideBlocks(); // Hide all blocks before showing the new one
        const targetBlocks = document.querySelectorAll(selector);
        if (targetBlocks.length > 0) {
            targetBlocks.forEach(targetBlock => {
                targetBlock.style.display = 'block'; // Display the block immediately
                setTimeout(() => {
                    targetBlock.classList.add('active'); // Activate the transition
                }, 10); // Slight delay to ensure the transition applies correctly
            });
        }
    }

    // Event delegation for clickers
    body.addEventListener('click', function(event) {
        if (event.target.classList.contains('clicker')) {
            event.preventDefault(); // Prevent default link behavior
            const targetSelector = event.target.getAttribute('data-target');
            showBlock(targetSelector);
        }

        // Handle click outside of content blocks to hide them
        if (!event.target.closest('.content-block') && !event.target.classList.contains('clicker')) {
            hideBlocks(); // Hide blocks if click is outside any content block
        }
    });

    // Event delegation for close buttons
    body.addEventListener('click', function(event) {
        if (event.target.classList.contains('close')) {
            event.stopPropagation(); // Prevent the click event from propagating to the document
            hideBlocks(); // Hide all content blocks
        }
    });

    // Handle clicks within content blocks to prevent hiding
    body.addEventListener('click', function(event) {
        if (event.target.closest('.content-block')) {
            event.stopPropagation(); // Prevent click events inside block from bubbling up to the document
        }
    });
});
