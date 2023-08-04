class Project {
  constructor(title, image, alt) {
    this.title = title;
    this.image = image;
    this.alt = alt;
  }
}
const projects = [
  new Project(
    "Fashion Magazine",
    "../src/images/stock-1--tall.jpg",
    "Person sitting in fashionable clothes"
  ),
  new Project(
    "Sport Brand",
    "../src/images/stock-2--tall.jpg",
    "Person sitting in fashionable clothes"
  ),
  new Project(
    "Food Product",
    "../src/images/stock-3--tall.jpg",
    "Person sitting in fashionable clothes"
  ),
];

export default projects;  