import React, { useEffect, useState } from 'react';
import Medium from './Medium';
import Github from './Github';

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
                <Medium/>
                {matches && <div><p>My Github</p></div>}
                <Github/>
            </div>
        </div>
    )
}

export default Greet;
