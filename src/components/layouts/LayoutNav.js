import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LayoutNavBar=(props)=>(
    <nav className="fc-navbar">
        <ul className="fc-navbar_container">
            {props.navigation.map(item=>(
                <li className="fc-navbar_container-item" key={ item.id }>
                    <Link to={ item.link } className="fc-navbar_link" >
                        <div className="fc-navbar_icon">
                            <FontAwesomeIcon icon="check-square" size="2x" />
                        </div>
                        <span className="fc-navbar_label">
                            {item.label}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default LayoutNavBar;

