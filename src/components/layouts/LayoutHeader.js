import React from 'react';
import SectionNavigation from './SectionNavigation';

const LayoutHeader = (prop )=>{
    return (
        <header className="fc_header" >
            <h1 className="fc_title" > {prop.title} </h1>
            <SectionNavigation sections={ prop.sections }/>
        </header>
    );
};

export default LayoutHeader;