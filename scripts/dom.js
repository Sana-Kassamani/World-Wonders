let wondersDiv = document.getElementById("wonders");
let wonderSection = document.getElementById("wonder-details");
let wonderImages = document.getElementById("wonder-images");
let loadMore = document.getElementById("load-more");

function addWonder(name, img) {
  let div = document.createElement("div");
  div.setAttribute("class", "wonder");
  div.setAttribute("value", name);
  let learnMore = document.createElement("button");
  learnMore.innerHTML = "Learn More";
  learnMore.addEventListener("click", () => {
    window.location.href = `./../pages/wonder.html?name=${name}`;
  });
  let html = `
  <h5 class="wonder-name">${name}</h5>
  <div class="div-img">
    <img src=${img} alt="" />
  </div>`;
  div.innerHTML = html;
  div.appendChild(learnMore);
  wondersDiv.appendChild(div);
}

function addWonderDetails(wonderArray) {
  let wonder = wonderArray[0];
  let div = document.createElement("div");
  div.innerHTML = `
  <h2>${wonder.name}</h2>
      <p>${wonder.summary ? wonder.summary : ""}</p>
      <ul>
        <h5>Details:</h5>
        <li>${wonder.location ? wonder.location : ""}</li>
        <li>${wonder.build_year ? wonder.build_year : ""}</li>
        <li>${wonder.time_period ? wonder.time_period : ""}</li>
      </ul>
      <ul>
        <h5>Links</h5>
        <li>${wonder.links.wiki ? wonder.links.wiki : ""}</li>
        <li>${wonder.links.britannica ? wonder.links.britannica : ""}</li>
        <li>${wonder.links.google_maps ? wonder.links.google_maps : ""}</li>
        <li>${wonder.links.trip_advisor ? wonder.links.trip_advisor : ""}</li>
      </ul>
  `;
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
