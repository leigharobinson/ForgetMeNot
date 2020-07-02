const remoteURL = "http://localhost:5005";
console.log(sessionStorage.getItem("credentials"), "user?")


export default {
  get(id) {
    return fetch(`${remoteURL}/giftCards/${id}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    // Moved currentUser into this function so it's not 'null' when this page loads.
    // BUT! Best idea is to pass the userId into this function when you call it.
    // Then you don't need to set this variable at all. Just make getAll take an arg: getAll(currentUser)
    // I would do the same thing in your other getAll methods
    const currentUser = sessionStorage.getItem("credentials");
    return fetch(
      `${remoteURL}/giftCards?userId=${currentUser}`
    ).then((result) => result.json());
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
