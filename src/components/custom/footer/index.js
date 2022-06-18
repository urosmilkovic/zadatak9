import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoSource } from "../../../assets";
import "./style.scss";

const NavItems = [
  { label: "Home", location: "/" },
  { label: "Products", location: "/products" },
  { label: "Brands", location: "/brands" },
];

const Footer = () => {
  return (
    <div className="ec-footer-main">
      <div className="ec-container ec-footer-inner">
        <div className="ec-footer-left">
          <Link to="/" className="ec-footer-logo">
            <img src={LogoSource} alt="PocketStore" />
          </Link>
          <div className="ec-footer-description">
            The PocketStore gives you the guidance, inspiration and innovation
            you need to become a better athlete. Join us to reach your goals and
            have fun along the way.
          </div>
        </div>
        <div className="ec-footer-right">
          <div className="ec-navbar-items">
            {NavItems.map((x) => (
              <NavLink
                key={x.location}
                className={({ isActive }) =>
                  `ec-navbar-item ${isActive ? "ec-navbar-item-active" : ""}`
                }
                to={x.location}
              >
                {x.label}
              </NavLink>
            ))}
          </div>
          <div className="ec-footer-socials">
            <IconButton
              className="ec-footer-social"
              size="large"
              href="https://instagram.com/urosmilkovic"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              className="ec-footer-social"
              size="large"
              href="https://facebook.com/u.milkovic"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              className="ec-footer-social"
              size="large"
              href="https://www.linkedin.com/in/urosmilkovic/"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="ec-copyright">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
