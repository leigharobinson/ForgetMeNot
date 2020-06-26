import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./NavBar.css";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const handleLogout = () => {
    props.clearUser();
  };

  return (
    <>
      <div>
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto" href="/">
            <picture>
              <img
                id="FGMNlogo"
                src={require("../Images/FGMNlogo.png")}
                alt="house"
              />
            </picture>
            Forget Me Not
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/giftCards">
                  <picture>
                    <img
                      src={require("../Images/giftcard.png")}
                      alt="Gift Card"
                    />
                  </picture>
                  Gift Cards
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/coupons">
                  <picture>
                    <img
                      height="36px"
                      width="39px"
                      src={require("../Images/coupon.png")}
                      alt="Coupon Icon"
                    />
                  </picture>
                  Coupons
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/loyaltyRewardsCards">
                  <picture>
                    <img
                      src={require("../Images/loyalty.png")}
                      alt="Loyalty Reward Card"
                    />
                  </picture>
                  Loyalty Rewards
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={handleLogout} href="/loyaltyRewardsCards">
                  <picture>
                    <img src={require("../Images/logout.png")} alt="user" />
                  </picture>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
