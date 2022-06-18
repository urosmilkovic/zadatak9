import {
  ShoppingCartOutlined,
  Menu,
  Home,
  ShoppingBasket,
  FormatListBulleted,
} from "@mui/icons-material";
import {
  Badge,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogoSource } from "../../../assets";
import { useStoreContext } from "../../../context";
import "./style.scss";

const NavItems = [
  { label: "Home", location: "/", icon: <Home /> },
  { label: "Products", location: "/products", icon: <ShoppingBasket /> },
  { label: "Brands", location: "/brands", icon: <FormatListBulleted /> },
];

const Navigation = () => {
  const { items, toggleDrawer } = useStoreContext();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const goTo = (x) => {
    navigate(x);
    setOpen(false);
  };

  return (
    <Fragment>
      <div className="ec-navbar-main">
        <div className="ec-container ec-navbar-inner">
          <Link to="/" className="ec-navbar-logo">
            <img src={LogoSource} alt="PocketStore" />
          </Link>
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
            <IconButton onClick={toggleDrawer}>
              <Badge
                badgeContent={items.reduce((x, y) => y.count + x, 0)}
                color="primary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </div>
          <IconButton
            className="ec-navbar-mobile-hamburger"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </IconButton>
        </div>
      </div>
      <Drawer
        className="ec-navbar-mobile-drawer"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="ec-navbar-mobile-logo">
          <div className="ec-navbar-logo" onClick={() => goTo("/")}>
            <img src={LogoSource} alt="PocketStore" />
          </div>
        </div>
        <List>
          {NavItems.map((x, y) => (
            <ListItem button key={y} onClick={() => goTo(x.location)}>
              <ListItemIcon>{x.icon}</ListItemIcon>
              <ListItemText primary={x.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default Navigation;
