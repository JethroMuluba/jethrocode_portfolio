
import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

    const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Fonction pour afficher le bouton lorsque l'utilisateur fait défiler la page
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // Fonction pour faire défiler vers le haut
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50 ">
        {isVisible && (
            <button
            onClick={scrollToTop}

            className="bg-[#FEB633] hover:bg-[#303131] text-white p-2 rounded-full shadow-md transition duration-300 animate-bounce"
            >
            <MdKeyboardDoubleArrowUp size={24} />
            </button>
        )}
        </div>
    );
    };

export default ScrollToTopButton;