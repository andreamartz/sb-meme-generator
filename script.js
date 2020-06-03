const memeSection = document.querySelector(".meme-flex-container");
const xIconSrc = "./img/large-x-icon.png";

// ******************************************************
// HELPER FUNCTIONS
// ******************************************************

function createMemeContainer() {
  const memeContainer = document.createElement("figure");
  memeContainer.classList.add("meme-container");
  return memeContainer;
}

function createMemeElements(url, topText, bottomText) {
  // create img element to contain meme image
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.classList.add("meme-image");

  // create p element to contain top text
  const pTop = document.createElement("p");
  pTop.classList.add("meme-text");
  pTop.classList.add("meme-text-top");
  pTop.innerText = `${topText}`;

  // create p element to contain bottom text
  const pBottom = document.createElement("p");
  pBottom.classList.add("meme-text");
  pBottom.classList.add("meme-text-bottom");
  pBottom.innerText = `${bottomText}`;
  // create and return an object containing the meme elements
  const memeElements = { img: img, pTop: pTop, pBottom: pBottom };
  return memeElements;
}

function createModal(src) {
  // create elements for modal div
  let modal = document.createElement("div");
  const xIconContainer = document.createElement("div");
  const img = document.createElement("img");

  // add classes and attributes to modal elements
  modal.classList.add("modal");
  modal.classList.add("hidden");
  xIconContainer.classList.add("x-icon-container");
  img.setAttribute("src", src);
  img.classList.add("x-icon");

  // build the modal from the elements
  xIconContainer.appendChild(img);
  modal.appendChild(xIconContainer);

  return modal;
}

// ***********************************************************
// EVENT LISTENERS
// ***********************************************************

// SUBMIT form to create and append meme to DOM and reset the form
document.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const url = form[0].value;
  const topText = form[1].value;
  const bottomText = form[2].value;

  const memeContainer = createMemeContainer();
  const memeElements = createMemeElements(url, topText, bottomText);
  const modal = createModal(xIconSrc);

  memeContainer.appendChild(memeElements.img);
  memeContainer.appendChild(memeElements.pTop);
  memeContainer.appendChild(memeElements.pBottom);
  memeContainer.appendChild(modal);
  const meme = memeContainer;

  memeSection.appendChild(meme);

  form.reset();
});

// CLICK to remove meme
document.addEventListener("click", function (e) {
  const target = e.target;
  let memeContainer;
  if (target.classList.contains("x-icon-container")) {
    memeContainer = target.parentElement.parentElement;
  } else if (target.classList.contains("x-icon")) {
    memeContainer = target.parentElement.parentElement.parentElement;
  } else return;
  memeContainer.remove();
});
