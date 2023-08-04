import projects from "./showreel/_projects";
import postAllProjects from "./showreel/_logic";

const btn = document.querySelector(".btn--showreel");

btn.addEventListener("click", () => {
  postAllProjects(projects);
})