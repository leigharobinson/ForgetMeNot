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
  delete(id) {
    return fetch(`${remoteURL}/loyaltyRewardsCards/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newLoyaltyReward) {
    return fetch(`${remoteURL}/loyaltyRewardsCards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLoyaltyReward),
    }).then((data) => data.json());
  },
  update(editedLoyaltyRewardCard) {
    return fetch(
      `${remoteURL}/loyaltyRewardsCards/${editedLoyaltyRewardCard.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedLoyaltyRewardCard),
      }
    ).then((data) => data.json());
  },
};
