"use strict";

const projects = document.querySelector(".projects-images");

console.log(projects);
const logg = function () {
  console.log("First Project");
};

projects.addEventListener("click", logg);
