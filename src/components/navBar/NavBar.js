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
          <div id="plain">
            <NavbarBrand className="mr-auto" href="/">
              <div id="Nav_Container">
                <picture>
                  <Icon name="home" size="large" />
                </picture>
                <h4 id="title">Forget Me Not</h4>
              </div>
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <div id="GC_gold">
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
              </div>
              <NavItem>
                <div id="C_pink">
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
                </div>
              </NavItem>
              <NavItem>
                <div id="LR_purp">
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
                </div>
              </NavItem>
              <NavItem>
                <div id="plain1">
                  <NavLink onClick={handleLogout} href="/loyaltyRewardsCards">
                    <picture>
                      <Icon name="user" size="large" />
                    </picture>
                    Logout
                  </NavLink>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
