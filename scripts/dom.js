let wondersDiv = document.getElementById("wonders");

function addWonderName(name, img) {
  let nameHeader = document.createElement("h5");
  let div = document.createElement("div");
  div.setAttribute("class", "div-img");
  let image = document.createElement("img");
  image.setAttribute("src", img);
  nameHeader.innerHTML = name;
  div.appendChild(nameHeader);
  div.appendChild(image);

  wondersDiv.appendChild(div);
}
