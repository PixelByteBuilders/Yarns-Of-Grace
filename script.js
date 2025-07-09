document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar'); // Hamburger icon
    const close = document.getElementById('close'); // Close icon
    const nav = document.getElementById('navbar'); // The main navigation UL
    const dropdowns = document.querySelectorAll('#navbar .dropdown > a'); // All dropdown parent links

    // Function to close a specific dropdown (removed timeout logic)
    function closeDropdown(dropdownElement) {
        dropdownElement.parentElement.classList.remove('active'); // Remove 'active' class from parent li
    }

    // Toggle main navigation for mobile (Hamburger click)
    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active'); // Open main mobile nav
            bar.style.display = 'none'; // Hide hamburger
            close.style.display = 'block'; // Show close button
        });
    }

    // Toggle main navigation for mobile (Close 'X' click)
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active'); // Close main mobile nav
            close.style.display = 'none'; // Hide close button
            bar.style.display = 'block'; // Show hamburger
            // Crucial: Also close any open dropdowns when main menu closes
            dropdowns.forEach(dropdown => {
                closeDropdown(dropdown); // Ensures dropdowns collapse
            });
        });
    }

    // Toggle dropdowns on mobile click
    if (dropdowns) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (event) => {
                if (window.innerWidth <= 799) { // Only apply this logic on mobile
                    // Prevent default link behavior if it's just a placeholder '#'
                    if (dropdown.getAttribute('href') === '#') {
                        event.preventDefault();
                    }

                    const parentLi = dropdown.parentElement;

                    if (parentLi.classList.contains('active')) {
                        // If dropdown is already open, close it
                        closeDropdown(dropdown);
                    } else {
                        // Close any other open dropdowns first (good practice for mobile)
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                closeDropdown(otherDropdown);
                            }
                        });
                        // Open the current dropdown
                        parentLi.classList.add('active');
                    }
                }
            });
        });
    }

    // Close mobile menu and dropdowns when any link (main or dropdown) is clicked
    const navLinks = document.querySelectorAll('#navbar li:not(.dropdown) a, .dropdown-content a');
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 799) { // Only for mobile
                    // Close the main mobile nav
                    nav.classList.remove('active');
                    close.style.display = 'none';
                    bar.style.display = 'block';
                    // Close any open dropdowns
                    dropdowns.forEach(dropdown => {
                        closeDropdown(dropdown);
                    });
                }
            });
        });
    }

    // Handle initial state and resize events
    function handleResize() {
        if (window.innerWidth > 799) { // If desktop
            nav.classList.remove('active'); // Ensure mobile menu is closed
            bar.style.display = 'none'; // Hide mobile menu button
            close.style.display = 'none'; // Hide close button
            // Ensure desktop dropdowns work by removing mobile 'active' classes
            // (These classes are only for mobile menu visibility)
            dropdowns.forEach(dropdown => {
                dropdown.parentElement.classList.remove('active');
            });
        } else { // If mobile
            // Determine whether to show bar or close based on current nav state
            if (!nav.classList.contains('active')) {
                bar.style.display = 'block';
                close.style.display = 'none';
            } else {
                bar.style.display = 'none';
                close.style.display = 'block';
            }
        }
    }

    // Call on load and resize
    handleResize();
    window.addEventListener('resize', handleResize);
});