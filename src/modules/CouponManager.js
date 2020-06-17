const remoteURL = "http://localhost:5005";

export default {
  get(id) {
    return fetch(`${remoteURL}/coupons/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/coupons`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/coupons/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newCoupon) {
    return fetch(`${remoteURL}/coupons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoupon),
    }).then((data) => data.json());
  },
};
