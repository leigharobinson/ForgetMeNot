const remoteURL = "http://localhost:5005";

export default {
  get(id) {
    return fetch(`${remoteURL}/giftCards/${id}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/giftCards`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/giftCards/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newGiftCard) {
    return fetch(`${remoteURL}/giftCards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGiftCard),
    }).then((data) => data.json());
  },
  update(editedGiftCard) {
    return fetch(`${remoteURL}/giftCards/${editedGiftCard.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedGiftCard),
    }).then((data) => data.json());
  },
};
