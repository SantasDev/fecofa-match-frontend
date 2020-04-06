import React from 'react';
import { Link } from 'react-router-dom';

class SectionNavigation extends React.Component {
  render(){
    return (
      <nav className="section-navigation">
        {this.props.sections && this.props.sections.map(section=>(
          <Link className="section-navigation_link" key={ section.id } to={section.link}> {section.label} </Link>
        ))}
      </nav>
    );
  };
}

export default SectionNavigation;