import React, { useState, useEffect } from "react";
import CouponManager from "../../modules/CouponManager";
import { Icon } from "semantic-ui-react";
import { Button } from "reactstrap";
import CouponCard from "./CouponCard";
import "./Coupon.css";
const CouponList = (props) => {
  //The initial state is an emptry array
  const [coupons, setCoupons] = useState([]);

  const getCoupons = () => {
    //After the data comes back from the API, we use the setCoupons function to update state
    return CouponManager.getAll().then((couponsFromAPI) => {
      setCoupons(couponsFromAPI);
      // console.log(couponsFromAPI);
    });
  };
  //got teh coupons from the API on the component's first render
  useEffect(() => {
    getCoupons();
  }, []);

  const deleteCoupon = (id) => {
    CouponManager.delete(id).then(() =>
      CouponManager.getAll().then(setCoupons)
    );
  };

  return (
    <>
      <div id="background_Coup">
        <h1 id="emptySpace_C">Hello </h1>
        <div className="TopContainer">
          {/* //add this button above your display of animal cards */}
          <section className="section-content">
            <Button
              id="NewCouponFormButton"
              type="button"
              className="btn"
              onClick={() => {
                props.history.push("/coupons/new");
              }}
            >
              <Icon name="add" size="large" />
              Add Coupon
            </Button>
            {/* //Finally we use map() to "loop over" the coupons array to show a list of coupon cards */}
          </section>
        </div>
        <div className="GiftCard_simp">
          {coupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              coupon={coupon}
              deleteCoupon={deleteCoupon}
              {...props}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CouponList;
