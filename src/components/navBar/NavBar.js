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
import { Icon } from "semantic-ui-react";
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
              <Icon name="home" size="large" />
            </picture>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/giftCards">
                  <picture>
                    <img
                      class="giftCard_icon"
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
                      class="Coupon_icon"
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
                      class="LRC_icon"
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
                    <Icon name="user" size="large" />
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
