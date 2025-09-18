const sidebarToggleButton = document.getElementById('btn--toggle-sidebar');

sidebarToggleButton.addEventListener('click', () => {
    const isSidebarToggled = sidebarToggleButton.getAttribute('aria-expanded');

    // User tampered with the aria-expanded value.
    if (isSidebarToggled != 'true' && isSidebarToggled != 'false') {
        throw new Error(`Invalid aria-expanded value provided: '${isSidebarToggled}'.`)
    }

    const ariaExpandedBoolNegated = isSidebarToggled == 'false' ? 'true' : 'false';

    sidebarToggleButton.setAttribute(
        'aria-expanded',
        ariaExpandedBoolNegated
    );
});