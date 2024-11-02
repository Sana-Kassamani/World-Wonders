let wondersDiv = document.getElementById("wonders");
let wonderSection = document.getElementById("wonder-details");
let wonderImages = document.getElementById("wonder-images");
let loadMore = document.getElementById("load-more");
let main = document.getElementById("main-details");
let prevLink = document.createElement("a");
let nextLink = document.createElement("a");

function addWonder(name, img) {
  let div = document.createElement("div");
  div.setAttribute(
    "class",
    "wonder flex column justify-center align-center secondary-bg "
  );
  div.setAttribute("value", name);
  let learnMore = document.createElement("a");
  learnMore.setAttribute("class", "primary-bg primary learn-more");
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
  div.setAttribute("class", "details flex column");
  div.innerHTML = `
  <h2>${wonder.name}</h2>
      <p>${wonder.summary ? wonder.summary : ""}</p>
      <ul class="details-list">
        <li>Location: ${wonder.location ? wonder.location : "Unknown"}</li>
        <li>Build Year: ${
          wonder.build_year ? wonder.build_year : "Unknown"
        }</li>
        <li>Time Period: ${
          wonder.time_period ? wonder.time_period : "Unknown"
        }</li>
      </ul>
  `;

  let list = document.createElement("ul");
  list.setAttribute("class", "link-list flex row");
  div.appendChild(list);
  wonder.links.wiki &&
    addLink(wonder.links.wiki, list, "./../assets/images/wiki.png");
  wonder.links.britannica &&
    addLink(wonder.links.britannica, list, "./../assets/images/britannica.png");
  wonder.links.google_maps &&
    addLink(wonder.links.google_maps, list, "./../assets/images/maps.png");
  wonder.links.trip_advisor &&
    addLink(wonder.links.trip_advisor, list, "./../assets/images/tripadv.png");
  wonderSection.appendChild(div);
  addWonderImages(wonder.links.images);
}

function addWonderImages(images) {
  const imagesArray = Array.from(images);
  imagesArray.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("class", "div-img ");
    div.innerHTML += `
            <img src=${element} alt="">`;
    wonderImages.appendChild(div);
  });
}

function addLink(link, list, src) {
  let listItem = document.createElement("li");
  let a = document.createElement("a");
  let image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("class", "link-image");
  a.appendChild(image);
  a.setAttribute("href", link);
  listItem.appendChild(a);
  list.appendChild(listItem);
}
