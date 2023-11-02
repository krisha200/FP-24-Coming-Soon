// Get all the card-toggle and card-social elements
const toggleButtons = document.querySelectorAll('.card-toggle');
const socialCards = document.querySelectorAll('.card-social');

// Add event listeners to each toggle button
toggleButtons.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        const social = socialCards[index];
        
        // If the animation class exists, add the down-animation class
        if (social.classList.contains('animation')) {
            social.classList.add('down-animation');
            
            // Remove the down-animation class after the animation duration
            setTimeout(() => {
                social.classList.remove('down-animation');
            }, 1000);
        }

        // Toggle the animation class on the current card's social element
        social.classList.toggle('animation');
    });
});

// motionnnn
// Get all the motion cards
const motionCards = document.querySelectorAll('.motion-card');

// Add event listeners for the mousemove event
motionCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        // Calculate the distance from the center of the card to the cursor position
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;

        // Apply a 3D transform for a more immersive effect
        card.style.transform = `rotateY(${deltaX / 10}deg) rotateX(${deltaY / 10}deg) scale(1.05)`; // Adjust the values for the desired 3D motion
    });

    // Reset the card's transform when the mouse leaves the card
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
});
