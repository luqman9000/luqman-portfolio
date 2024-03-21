import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

const Greet = () => {
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 1000px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1000px)");
        const handleChange = (e) => setMatches(e.matches);
        
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <div className="greet-container">
            <h1 style={{ fontFamily: "Thasadith" }}>
                Assalammualaikum and Hi
            </h1>
            <p style={{ fontFamily: "Thasadith", fontSize:"25px" }}>
                My name is <b style={{ fontFamily: "Thasadith", fontSize:"30px" }}>Muhammad Luqman</b>. I have a passion for all things <b style={{ fontFamily: "Thasadith", fontSize:"30px" }}>tech</b>, and I work as a <b style={{ fontFamily: "Thasadith", fontSize:"30px" }}>developer</b>. Nonetheless, I am always open to <b style={{ fontFamily: "Thasadith" }}>learning</b> and <b style={{ fontFamily: "Thasadith" }}>exploring</b> new concepts.
            </p>
            <div className="medium" style={{ display: 'flex', flexDirection: matches ? 'column' : 'row', justifyContent: matches ? 'normal' : 'center', gap: matches ? '0px' : '10px' }}>
                {matches && <div><p>My Blog</p></div>}
                <div>
                    <a href="https://medium.com/@luqmanhal9000" aria-label="Medium Blog" target="_blank" rel="noreferrer">
                        <BsMedium size={40}/>
                    </a>
                </div>
                {matches && <div><p>My Github</p></div>}
                <div>
                    <a href="https://github.com/luqman9000" aria-label="Github" target="_blank" rel="noreferrer">
                        <FaGithub size={40}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Greet;
