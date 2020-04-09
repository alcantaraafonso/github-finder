import React, { Component } from "react";

import PropTypes from "prop-types";

export class NavBar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "github",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={`fab fa-${this.props.icon}`}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default NavBar;
