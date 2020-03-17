import React from 'react';
import SectionNavigation from './SectionNavigation';

const LayoutHeader = (prop )=>(
    <header className="fc_header" >
        <h1 className="fc_title" > {prop.page.label} </h1>
        <SectionNavigation sections={ prop.page.sections }/>
    </header>
);

export default LayoutHeader;