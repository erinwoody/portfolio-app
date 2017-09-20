import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const styles = {
  navStyle: {
    top: 0,
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 20,
    marginBottom: 50
  },
  listStyle: {},
  linkStyle: {
    textDecoration: "none",
    border: "2px solid pink",
    color: "green",
    fontWeight: "bold",
    padding: 5
  },
  activeStyle: {
    backgroundColor: "magenta",
    color: "white"
  }
};

export default class Header extends Component {
  render() {
    return (
      <nav style={styles.navStyle}>
        <NavLink
          exact
          to="/"
          style={styles.linkStyle}
          activeStyle={styles.activeStyle}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={styles.linkStyle}
          activeStyle={styles.activeStyle}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={styles.linkStyle}
          activeStyle={styles.activeStyle}
        >
          Contact
        </NavLink>
      </nav>
    );
  }
}
