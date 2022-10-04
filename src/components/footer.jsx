import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// import "./footer.scss";

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" };
};

const ExactNavLink = props => {
  return <Link getProps={isActive} {...props} />
};

const Footer = ({ siteTitle }) => {
  return (
    <footer className="footer">
      <div className="white-row" />
      <div className="footer-content bg-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <ExactNavLink to="/" >{siteTitle}</ExactNavLink>
          </li>
          <li className="nav-item">
            <ExactNavLink to="/pricing">Pricing</ExactNavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
