function showLoading() {
  const div = document.createElement("div");
  div.classList.add("loading-component");

  const h2 = document.createElement("h2");
  h2.innerText = "Loading..."
  h2.classList.add("text");

  div.appendChild(h2);

  document.body.appendChild(div);
}

function hideLoading() {

}