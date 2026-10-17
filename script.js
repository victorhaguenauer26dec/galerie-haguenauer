const artworkNumbers = [
  781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795,
  796, 797, 798, 839, 840, 841, 842, 843, 845, 846, 847, 848, 849, 850, 853,
  854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 922, 923, 924, 925, 926,
  927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 944, 945, 946,
  947, 948,
];

const artworkTypes = [
  "Aquarelle",
  "Huile",
  "Gravure sur métal",
  "Gravure sur linoléum",
  "Dessin",
  "Dessin au fusain",
  "Dessin au crayon",
  "Acrylique",
  "Photographie",
];
const artworkPlaces = ["Lorraine", "Provence", "Bretagne"];

const artworkMetadata = {
  1: { year: 1985, type: "Aquarelle" },
  2: { year: 1979, type: "Aquarelle" },
  3: { year: 1978, type: "Aquarelle", place: "Bretagne" },
  4: { year: 1978, type: "Aquarelle", place: "Bretagne" },
  5: { type: "Dessin au fusain", place: "Provence" },
  6: { year: 1996, type: "Dessin au fusain", place: "Provence" },
  7: { year: 2003, type: "Dessin au fusain", place: "Provence" },
  8: { title: "Vue de l'atelier" },
  9: { year: 1978, type: "Aquarelle" },
  10: { place: "Bretagne" },
  11: { year: 1995, type: "Dessin au fusain", place: "Provence" },
  12: { year: 2003, type: "Aquarelle", place: "Provence" },
  13: { type: "Dessin au fusain", place: "Bretagne" },
  14: { year: 2001, type: "Dessin au fusain", place: "Provence" },
  15: { year: 1996, type: "Dessin au fusain", place: "Provence" },
  16: { year: 1995, type: "Aquarelle" },
  17: { type: "Dessin au fusain", place: "Provence" },
  18: { type: "Aquarelle" },
  19: { year: 1999, type: "Dessin au fusain", place: "Provence" },
  20: { year: 2001, type: "Dessin au fusain", place: "Provence" },
  21: { year: 1993, type: "Dessin au fusain", place: "Provence" },
  22: { year: 1985, type: "Aquarelle" },
  23: { year: 1985, type: "Aquarelle" },
  24: { type: "Aquarelle" },
  25: { type: "Aquarelle" },
  26: { type: "Aquarelle" },
  27: {
    year: 2003,
    type: "Dessin au fusain",
    title: "St Paul de M",
    place: "Provence",
  },
  28: { year: 2001, type: "Dessin au fusain", place: "Provence" },
  29: { type: "Dessin au fusain", place: "Provence" },
  30: { year: 1985, type: "Huile", place: "Bretagne" },
  31: { year: 2000, type: "Huile", place: "Provence" },
  32: { year: 1982, type: "Huile", place: "Provence" },
  33: { type: "Huile", place: "Provence" },
  34: { year: 2001, type: "Dessin au fusain", place: "Bretagne" },
  35: { year: 1980, type: "Huile", place: "Provence" },
  36: { year: 1979, type: "Huile" },
  37: { year: 1985, type: "Huile", place: "Provence" },
  38: { year: 1987, type: "Huile", place: "Provence" },
  39: { type: "Huile" },
  40: { year: 1982, type: "Acrylique" },
  41: { type: "Dessin au crayon", place: "Bretagne" },
  42: { year: 1996, type: "Dessin au crayon", place: "Provence" },
  43: { year: 2003, type: "Aquarelle", place: "Provence" },
  44: { year: 2003, type: "Dessin au fusain", place: "Provence" },
  45: {
    year: 1983,
    type: "Dessin au crayon",
    title: "Eygalières",
    place: "Provence",
  },
  46: {
    type: "Aquarelle",
    title: "Les-Baux-de-Provence",
    place: "Provence",
  },
  47: { year: 1992, type: "Dessin au crayon", place: "Provence" },
  48: {
    year: 1995,
    type: "Dessin au crayon",
    title: "Sainte Sixtine",
    place: "Provence",
  },
  49: { year: 1972, type: "Aquarelle", place: "Bretagne" },
  50: { year: 1978, type: "Aquarelle", place: "Bretagne" },
  51: { type: "Aquarelle", place: "Bretagne" },
  52: { type: "Aquarelle" },
  53: {
    year: 1981,
    type: "Dessin au crayon",
    title: "Forêt Engloutie - Vosges",
    place: "Lorraine",
  },
  54: { year: 2001, type: "Acrylique", place: "Provence" },
  55: { year: 1981, type: "Huile", place: "Lorraine" },
  56: { year: 1997, type: "Dessin au fusain", place: "Provence" },
  57: { year: 1997, type: "Dessin au fusain", place: "Provence" },
  58: { year: 1978, type: "Aquarelle" },
  59: { year: 2000, type: "Dessin au fusain", place: "Provence" },
  60: { year: 1993, type: "Dessin au fusain", place: "Provence" },
  61: { year: 1995, type: "Dessin au fusain", place: "Provence" },
  62: { year: 1996, type: "Dessin au fusain", place: "Provence" },
};

const artworks = artworkNumbers.map((number, index) => {
  const metadata = artworkMetadata[index + 1] ?? {};
  return {
    src: `images/100_${String(number).padStart(4, "0")}.jpg`,
    label: metadata.title || `Œuvre ${String(index + 1).padStart(2, "0")}`,
    year: metadata.year ?? null,
    type: metadata.type ?? "",
    place: metadata.place ?? "",
  };
});

const grid = document.querySelector("#artwork-grid");
const dialog = document.querySelector("#lightbox");
const typeFilter = document.querySelector("#filter-type");
const placeFilter = document.querySelector("#filter-place");
const artworkCount = document.querySelector("#gallery-count");
const emptyGallery = document.querySelector("#gallery-empty");
const lightboxImage = dialog.querySelector(".lightbox-image");
const lightboxTitle = dialog.querySelector("#lightbox-title");
const lightboxYear = dialog.querySelector("#lightbox-year");
let activeArtworkIndex = 0;
let featuredArtworkIndex = -1;
const artworkCards = [];

function formatArtworkDetails(artwork) {
  return [artwork.year, artwork.type, artwork.place].filter(Boolean).join(" · ");
}

function populateFilter(select, options) {
  options.forEach((option) => {
    const element = document.createElement("option");
    element.value = option;
    element.textContent = option;
    select.append(element);
  });
}

populateFilter(typeFilter, artworkTypes);
populateFilter(placeFilter, artworkPlaces);

function appendYear(parent, year, className) {
  if (!year) {
    return null;
  }

  const element = document.createElement("span");
  element.className = className;
  element.textContent = year;
  parent.append(element);
  return element;
}

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
  document.querySelector(".hero-caption strong").textContent = artwork.label;
  const featuredYear = document.querySelector(".hero-artwork-year");
  featuredYear.textContent = formatArtworkDetails(artwork);
  featuredYear.hidden = !featuredYear.textContent;
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
  lightboxYear.textContent = formatArtworkDetails(artwork);
}

function filterArtworks() {
  let visibleCount = 0;
  artworkCards.forEach(({ card, artwork }) => {
    const matchesType = !typeFilter.value || artwork.type === typeFilter.value;
    const matchesPlace = !placeFilter.value || artwork.place === placeFilter.value;
    card.hidden = !(matchesType && matchesPlace);
    if (!card.hidden) {
      visibleCount += 1;
    }
  });

  artworkCount.textContent =
    `${visibleCount} œuvre${visibleCount === 1 ? "" : "s"} à découvrir`;
  emptyGallery.hidden = visibleCount > 0;
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
  number.textContent = [
    artwork.year,
    artwork.type,
    artwork.place,
    `${String(index + 1).padStart(2, "0")} / ${artworks.length}`,
  ].filter(Boolean).join(" · ");

  button.append(image);
  caption.append(title, number);
  card.append(button, caption);
  grid.append(card);
  artworkCards.push({ card, artwork });

  button.addEventListener("click", () => {
    showArtwork(index);
    dialog.showModal();
  });
});

artworkCount.textContent = `${artworks.length} œuvres à découvrir`;
typeFilter.addEventListener("change", filterArtworks);
placeFilter.addEventListener("change", filterArtworks);
document.querySelector("#filter-reset").addEventListener("click", () => {
  typeFilter.value = "";
  placeFilter.value = "";
  filterArtworks();
});

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
