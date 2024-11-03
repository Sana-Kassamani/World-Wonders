let index = 0;
const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/v0/wonders",
});

const fetchWorldWonders = async function () {
  try {
    const fetchedData = await instance.get();

    return fetchedData;
  } catch (error) {
    console.log(error);
  }
};

fetchWorldWonders()
  .then((resolved) => {
    loadWonders(resolved.data);
    loadMore.addEventListener("click", () => {
      loadWonders(resolved.data);
    });
  })
  .catch((error) => {
    console.log(error);
  });

function loadWonders(data) {
  let added_index = index + 10;
  for (let i = index; i < added_index && i < data.length; i++) {
    addWonder(data[i].name, data[i].links.images[0]);
  }
  index = added_index;
  if (index > data.length) {
    loadMore.style.display = "none";
  }
}
