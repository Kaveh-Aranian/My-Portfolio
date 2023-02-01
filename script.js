"use strict";

const header = document.querySelector(".header");
const image = document.querySelector(".projects");

const hoverNav = function (e) {
  if (e.target.classList.contains("header-menu-link")) {
    const link = e.target;
    const siblings = link
      .closest(".header-menu")
      .querySelectorAll(".header-menu-link");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

const hoverImg = function (e) {
  if (e.target.classList.contains("project-image")) {
    const link = e.target;
    const siblings = link
      .closest(".projects")
      .querySelectorAll(".project-image");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

header.addEventListener("mouseover", hoverNav.bind(0.7));
header.addEventListener("mouseout", hoverNav.bind(1));

image.addEventListener("mouseover", hoverImg.bind(0.7));
image.addEventListener("mouseout", hoverImg.bind(1));
