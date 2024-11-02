const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/v0/wonders",
});
const fetchWonderDetails = async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const fetchedDetails = await instance.get("", {
    params: {
      name: `${name}`,
    },
  });
  addWonderDetails(fetchedDetails.data);
};

fetchWonderDetails();