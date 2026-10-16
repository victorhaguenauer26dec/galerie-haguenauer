const artworkNumbers = [
  781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795,
  796, 797, 798, 839, 840, 841, 842, 843, 845, 846, 847, 848, 849, 850, 853,
  854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 922, 923, 924, 925, 926,
  927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 944, 945, 946,
  947, 948,
];

const artworks = artworkNumbers.map((number, index) => ({
  src: `images/100_${String(number).padStart(4, "0")}.jpg`,
  label: `Œuvre ${String(index + 1).padStart(2, "0")}`,
}));

const grid = document.querySelector("#artwork-grid");
const dialog = document.querySelector("#lightbox");
const lightboxImage = dialog.querySelector(".lightbox-image");
const lightboxTitle = dialog.querySelector("#lightbox-title");
let activeArtworkIndex = 0;
let featuredArtworkIndex = -1;

function showRandomFeaturedArtwork() {
  let nextIndex = Math.floor(Math.random() * artworks.length);
  while (artworks.length > 1 && nextIndex === featuredArtworkIndex) {
    nextIndex = Math.floor(Math.random() * artworks.length);
  }

  featuredArtworkIndex = nextIndex;
  const artwork = artworks[featuredArtworkIndex];
  const image = document.querySelector(".hero-artwork img");
  image.src = artwork.src;
  image.alt = `${artwork.label} de René HAGUENAUER`;
  image.dataset.artworkIndex = String(featuredArtworkIndex);
  document.querySelector(".hero-index").textContent =
    `${String(featuredArtworkIndex + 1).padStart(2, "0")} / ${artworks.length}`;
}

showRandomFeaturedArtwork();

window.addEventListener("hashchange", showRandomFeaturedArtwork);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (link.hash === window.location.hash) {
      showRandomFeaturedArtwork();
    }
  });
});

function showArtwork(index) {
  activeArtworkIndex = (index + artworks.length) % artworks.length;
  const artwork = artworks[activeArtworkIndex];
  lightboxImage.src = artwork.src;
  lightboxImage.alt = `${artwork.label} de René HAGUENAUER`;
  lightboxTitle.textContent = artwork.label;
}

artworks.forEach((artwork, index) => {
  const card = document.createElement("figure");
  card.className = "artwork-card";

  const button = document.createElement("button");
  button.className = "artwork-open";
  button.type = "button";
  button.setAttribute("aria-label", `Agrandir ${artwork.label}`);

  const image = document.createElement("img");
  image.src = artwork.src;
  image.alt = `${artwork.label} de René HAGUENAUER`;
  image.loading = "lazy";
  image.decoding = "async";

  const caption = document.createElement("figcaption");
  caption.className = "artwork-caption";

  const title = document.createElement("strong");
  title.textContent = artwork.label;

  const number = document.createElement("span");
  number.textContent = `${String(index + 1).padStart(2, "0")} / ${artworks.length}`;

  button.append(image);
  caption.append(title, number);
  card.append(button, caption);
  grid.append(card);

  button.addEventListener("click", () => {
    showArtwork(index);
    dialog.showModal();
  });
});

document.querySelector("#artwork-count").textContent = artworks.length;

dialog.querySelector(".lightbox-close").addEventListener("click", () => {
  dialog.close();
});

dialog.querySelector(".lightbox-previous").addEventListener("click", () => {
  showArtwork(activeArtworkIndex - 1);
});

dialog.querySelector(".lightbox-next").addEventListener("click", () => {
  showArtwork(activeArtworkIndex + 1);
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showArtwork(activeArtworkIndex - 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showArtwork(activeArtworkIndex + 1);
  }
});
