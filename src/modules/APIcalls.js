const remoteURL = "http://localhost:5005";
const currentUser = sessionStorage.getItem("credentials");

function getAPIpublicArtCollections(searchTerm) {
  return fetch(
    `https://data.nashville.gov/resource/eviu-nxp6.json?$where=description like('%25${searchTerm}%25')`
  ).then((response) => response.json());
}

function getLocation(searchTerm) {
  return fetch(`${remoteURL}/coupons?userId=${currentUser}`);
}
