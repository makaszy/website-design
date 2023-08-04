function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}

function createDivOuter() {
  const div = createDiv(`main__showreel--outer`);
  /* div.classList.toggle("hidden"); */
  div.classList.add("p-main__showreel--outer");
  return div;
}

function createDivInner() {
  const div = createDiv(`main__showreel--inner`);
  return div;
}

function createImg() {
  const image = document.createElement("img");
  image.classList.add("p-showreel__img");
  return image;
}

function createTitle() {
  const heading = document.createElement("h2");
  heading.classList.add("showreel__title", "p-showreel__title");
  return heading;
}

function setProject(project) {
  document.querySelector(".p-showreel__img").setAttribute("src", project.image);
  document.querySelector(".p-showreel__img").setAttribute("alt", project.alt);
  document.querySelector(".p-showreel__title").textContent = project.title;
}

function createShowreelBlock() {
  const div = createDivOuter();
  const divIn = createDivInner();
  const img = createImg();
  const title = createTitle();
  div.appendChild(divIn);
  divIn.appendChild(img);
  divIn.appendChild(title);
  return div;
}

function deleteShowreelBlock() {
  const showreel = document.querySelector(`.main__showreel--outer`);
  showreel.remove();
}

export {createShowreelBlock, deleteShowreelBlock, setProject} 
