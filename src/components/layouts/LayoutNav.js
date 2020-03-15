import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LayoutNavBar=(props)=>(
    <nav className="fc-navbar">
        <ul>
            {props.navigation.map(item=>(
                <li>
                    <Link to={ item.link }>
                        <FontAwesomeIcon icon="check-square" size="2x" />
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default LayoutNavBar;

