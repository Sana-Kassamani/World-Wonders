let index = 0;
const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/v0/wonders",
});
const fetchWonders = async function () {
  const fetchedNames = await instance.get();
  let added_index = index + 10;
  for (let i = index; i < added_index; i++) {
    addWonder(fetchedNames.data[i].name, fetchedNames.data[i].links.images[0]);
  }
  index = added_index;
};

fetchWonders();

//Another method

// const fetchWorldWonders = async function () {
//   const fetchedData = await instance.get();
//   return fetchedData;
// };

// const array = fetchWorldWonders();
// array.then((resolved) => {
//   let added_index = index + 10;
//   for (let i = index; i < added_index; i++) {
//     addWonderName(resolved.data[i].name, resolved.data[i].links.images[0]);
//   }
//   index = added_index;
// });
