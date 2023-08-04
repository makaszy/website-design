import { createShowreelBlock, deleteShowreelBlock, setProject } from "./_display";

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

async function postProject(project) {
  setProject(project);
  await delay(2000);
}

async function postAllProjects(arr) {
  const main = document.querySelector("main");
  const div = createShowreelBlock();
  main.appendChild(div);
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await postProject(arr[i]);
  }
  deleteShowreelBlock();
} 

export default postAllProjects;
