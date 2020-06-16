const remoteURL = "http://localhost:5005";

export default {
  get(id) {
    return fetch(`${remoteURL}/loyaltyRewardsCards/${id}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/loyaltyRewardsCards`).then((result) =>
      result.json()
    );
  },
};
