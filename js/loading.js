window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 50); // Small delay to ensure display change is processed
    }, 1000); // Delay of 1 second (1000 milliseconds)
});
