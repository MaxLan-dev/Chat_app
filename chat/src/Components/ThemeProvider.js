import React, { useState } from 'react';
import './Chat.css';

const ThemeProvider = (props) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <div className={`${isDark ? 'dark-theme' : 'white-theme'}`}>
            <button className="theme-toggle" onClick={toggleTheme}>Toggle Theme</button>
            {props.children}
        </div>
    );
}

export default ThemeProvider;
