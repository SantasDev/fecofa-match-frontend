import React from 'react';
import {Link} from 'react-router-dom';

const LayoutNavBar=()=>(
    <nav className="fc-navbar">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/test">Test</Link>
            </li>
        </ul>
    </nav>
);

export default LayoutNavBar;

