import React, { useState, useEffect } from "react";
import CouponManager from "../../modules/CouponManager";
import CouponCard from "./CouponCard";

const CouponList = () => {
  //The initial state is an emptry array
  const [coupons, setCoupons] = useState([]);

  const getCoupons = () => {
    //After the data comes back from the API, we use the setCoupons function to update state
    return CouponManager.getAll().then((couponsFromAPI) => {
      setCoupons(couponsFromAPI);
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

  //Finally we use map() to "loop over" the coupons array to show a list of coupon cards
  return (
    <div className="container-cards">
      {coupons.map((coupon) => (
        <CouponCard
          key={coupon.id}
          coupon={coupon}
          deleteCoupon={deleteCoupon}
        />
      ))}
    </div>
  );
};

export default CouponList;
