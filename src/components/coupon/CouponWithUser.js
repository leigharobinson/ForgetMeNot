import React, { useState, useEffect } from "react";
// import CouponManager from "../../modules/CouponManager";
import CouponCard from "./CouponCard";
import UserManager from "../../modules/UserManager";
const CouponWithUser = (props) => {
  const [coupons, setCoupons] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    //got here now make call to get employee with animal
    UserManager.getWithCoupons(props.match.params.couponId).then(
      (APIResult) => {
        setUser(APIResult);
        setCoupons(APIResult.coupons);
      }
    );
  }, []);

  return (
    <div className="card">
      <p>User: {user.username}</p>
      {coupons.map((coupon) => (
        <CouponCard key={coupon.id} coupon={coupon} {...props} />
      ))}
    </div>
  );
};

export default CouponWithUser;
