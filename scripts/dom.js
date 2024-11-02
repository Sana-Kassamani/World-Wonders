let wondersDiv = document.getElementById("wonders");

function addWonder(name, img) {
  let div = document.createElement("div");
  div.setAttribute("class", "wonder");
  div.setAttribute("value", name);
  let learnMore = document.createElement("button");
  learnMore.innerHTML = "Learn More";
  learnMore.addEventListener("click", () => {
    window.location.href = `./../pages/wonder.html?${name}`;
  });
  let html = `
  <h5>${name}</h5>
  <div class="div-img">
    <img src=${img} alt="" />
  </div>`;
  div.innerHTML = html;
  div.appendChild(learnMore);
  wondersDiv.appendChild(div);
}
