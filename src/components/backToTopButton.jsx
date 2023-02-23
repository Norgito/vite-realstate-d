
import { useEffect, useState } from 'react';

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return <div className='App'>

        {backToTopButton && (
            <button className='z-20 bg-secondaryC fixed right-[50px] bottom-[50px] w-[50px] h-[50px] rounded-full text-white' onClick={scrollUp}>^</button>
        )}
    </div>;
}

export default BackToTopButton; 

