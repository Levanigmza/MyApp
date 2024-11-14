import React, { useState, useEffect } from 'react';
import './MouseCursor.css';

const MouseCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Function to track mouse movement and update position
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Create a smoke puff every time the mouse moves
            const smokeElement = document.createElement('div');
            smokeElement.classList.add('smoke');
            document.body.appendChild(smokeElement);

            // Position the smoke at the mouse cursor
            smokeElement.style.left = `${e.clientX - 10}px`; // Adjust position so it's centered
            smokeElement.style.top = `${e.clientY - 10}px`;

            // Remove the smoke after the animation ends (3000ms corresponds to animation duration)
            setTimeout(() => {
                smokeElement.remove();
            }, 1000); // Match the animation duration
        };

        // Add event listener for mousemove
        window.addEventListener('mousemove', updateMousePosition);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="custom-cursor">
            {/* Horizontal Line */}
            <div
                className="line horizontal"
                style={{ top: `${mousePosition.y}px` }} // Move the horizontal line to the Y position of the cursor
            ></div>

            {/* Vertical Line */}
            <div
                className="line vertical"
                style={{ left: `${mousePosition.x}px` }} // Move the vertical line to the X position of the cursor
            ></div>

            {/* Cross-point */}
            <div
                className="cross-point"
                style={{
                    left: `${mousePosition.x}px`,  // Position crosspoint on X
                    top: `${mousePosition.y}px`,   // Position crosspoint on Y
                }}
            ></div>
        </div>
    );
};

export default MouseCursor;
