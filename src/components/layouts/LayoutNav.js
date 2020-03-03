import React from 'react';
import {Link} from 'react-router-dom';


const navMap=[
    { name: 'home', path: '/'},
    { name: 'test', path: '/test'},
    { name: 'Match', path: '/match'},
    { name: 'Teams', path: '/teams'},
];

const LayoutNavBar=()=>(
    <nav className="fc-navbar">
        <ul className="fc-navbar_container">
            {navMap.map( nav=>(
            <li className="fc-navbar_container-item">
                <Link to={nav.path} className="fc-navbar_link centered-item">{nav.name}</Link>
            </li>
            ))}
        </ul>
    </nav>
);

export default LayoutNavBar;

