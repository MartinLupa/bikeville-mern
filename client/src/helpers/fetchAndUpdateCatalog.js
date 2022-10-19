export const fetchAndUpdateCatalog = (
  CATALOG_URL,
  dispatch,
  setCatalog,
  token
) => {
  fetch(CATALOG_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => dispatch(setCatalog(data)));
};
