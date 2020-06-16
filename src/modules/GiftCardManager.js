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
};
