let data = [
  {
    title: "Project #1",
    description:
      "We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.",
    src: "img/gallery-1.jpg",
    bigSrc: "img/gallery-1-orig.jpg",
    category: "ux-design",
  },
  {
    title: "Project #2",
    description:
      "We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.",
    src: "img/gallery-2.jpg",
    bigSrc: "img/gallery-2-orig.jpg",
    category: "mobile-apps",
  },
  {
    title: "Project #3",
    description:
      "We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.",
    src: "img/gallery-3.jpg",
    bigSrc: "img/gallery-3-orig.jpg",
    category: "custom-software",
  },
  {
    title: "Project #4",
    description:
      "We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.",
    src: "img/gallery-4.jpg",
    bigSrc: "img/gallery-4-orig.jpg",
    category: "qa-testing",
  },
  {
    title: "Project #5",
    description:
      "We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.",
    src: "img/gallery-5.jpg",
    bigSrc: "img/gallery-5-orig.jpg",
    category: "qa-testing",
  },
  {
    title: "Project #6",
    description:
      "We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.",
    src: "img/gallery-6.jpg",
    bigSrc: "img/gallery-6-orig.jpg",
    category: "mobile-apps",
  },
  {
    title: "Project #7",
    description:
      "We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.",
    src: "img/gallery-7.jpg",
    bigSrc: "img/gallery-7-orig.jpg",
    category: "custom-software",
  },
  {
    title: "Project #8",
    description:
      "We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.",
    src: "img/gallery-8.jpg",
    bigSrc: "img/gallery-8-orig.jpg",
    category: "qa-testing",
  },
];

let filters = document.querySelector(".projects-filter");
const spans = filters.querySelectorAll("span");
window.addEventListener("resize", closeFilterMenu);

function clickOutsideFilterMenu(event) {
  if (
    !event.target.matches(".projects-filter span") &&
    !event.target.matches(".projects-filter-button")
  ) {
    filters.classList.remove("button-pressed");
  }
}

function toggleMenu() {
  filters.classList.toggle("button-pressed");
  if (filters.classList.contains("button-pressed")) {
    document.addEventListener("click", clickOutsideFilterMenu);
  } else {
    document.removeEventListener("click", clickOutsideFilterMenu);
  }
}

function closeFilterMenu() {
  if (window.innerWidth > 992) {
    filters.classList.remove("button-pressed");
  }
}

for (const span of spans) {
  span.addEventListener("click", selectFilter);
}

function selectFilter() {
  for (const otherSpan of spans) {
    otherSpan.style.backgroundColor = "transparent";
    otherSpan.style.color = "#9b9b9b";
  }
  if (filters.classList.contains("button-pressed")) {
    this.style.backgroundColor = "#6689ff";
    this.style.color = "#fff";
  } else {
    this.style.color = "#6689ff";
  }
}

let projectsItems = document.getElementById("projects-items");
filterItems("all");
function filterItems(category) {
  let outputItems = "";
  for (let item of data) {
    if (item.category == category || category == "all") {
      outputItems += `<div class="project-item">
    <img src="${item.src}" alt="" />
    <div class="project-item-description">
      <div class="project-item-header">
        <img onclick="showAtBigImgFrameSRC('${item.bigSrc}')" src="img/zoom-increasing-symbol.png"
          alt="" />
        <h5>
          <a href="">${item.title}</a>
        </h5>
      </div>
      <p>${item.description}</p>
    </div>
  </div>`;
    }
  }
  projectsItems.innerHTML = outputItems;
}
