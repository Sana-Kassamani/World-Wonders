let wondersDiv = document.getElementById("wonders");
let wonderSection = document.getElementById("wonder-details");
let wonderImages = document.getElementById("wonder-images");
let loadMore = document.getElementById("load-more");

function addWonder(name, img) {
  let div = document.createElement("div");
  div.setAttribute(
    "class",
    "wonder flex column justify-center align-center secondary-bg "
  );
  div.setAttribute("value", name);
  let learnMore = document.createElement("a");
  learnMore.setAttribute("class", "primary-bg primary");
  learnMore.innerHTML = "Learn More";
  learnMore.setAttribute("href", `./../pages/wonder.html?name=${name}`);

  let html = `
  
  <div class="div-img flex justify-center align-center">
  
    <img src=${img} alt="" />
    <h5>${name}</h5>
  </div>`;
  div.innerHTML = html;
  div.appendChild(learnMore);
  wondersDiv.appendChild(div);
}

function addWonderDetails(wonderArray) {
  let wonder = wonderArray[0];
  let div = document.createElement("div");
  div.setAttribute("class", "details");
  div.innerHTML = `
  <h2>${wonder.name}</h2>
      <p>${wonder.summary ? wonder.summary : ""}</p>
      <ul>
        <h5>Details:</h5>
        <li>${wonder.location ? wonder.location : ""}</li>
        <li>${wonder.build_year ? wonder.build_year : ""}</li>
        <li>${wonder.time_period ? wonder.time_period : ""}</li>
      </ul>
  `;
  let list = document.createElement("ul");
  div.appendChild(list);
  wonder.links.wiki && addLink(wonder.links.wiki, list);
  wonder.links.britannica && addLink(wonder.links.britannica, list);
  wonder.links.google_maps && addLink(wonder.links.google_maps, list);
  wonder.links.trip_advisor && addLink(wonder.links.trip_advisor, list);
  wonderSection.appendChild(div);
  addWonderImages(wonder.links.images);
}

function addWonderImages(images) {
  const imagesArray = Array.from(images);
  wonderImages.innerHTML = "";
  imagesArray.forEach((element) => {
    wonderImages.innerHTML += `
        <div class="div-img">
            <img src=${element} alt="">
        </div>`;
  });
}

function addLink(link, list) {
  let listItem = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = "link";
  a.setAttribute("href", link);
  listItem.appendChild(a);
  list.appendChild(listItem);
}
