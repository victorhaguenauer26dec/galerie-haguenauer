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
];
const artworkThemes = [
  "Lorraine",
  "Provence",
  "Bretagne",
  "Cubisme",
  "Portrait",
  "Nature morte",
];
const artworkPeriods = [
  { label: "1945-1960", start: 1945, end: 1960 },
  { label: "1960-1970", start: 1960, end: 1970 },
  { label: "1970-1980", start: 1970, end: 1980 },
  { label: "1980-1990", start: 1980, end: 1990 },
  { label: "1990-2000", start: 1990, end: 2000 },
  { label: "2000-2010", start: 2000, end: 2011 },
];

const artworkMetadata = {
  1: { year: 1985, type: "Aquarelle" },
  2: { year: 1979, type: "Aquarelle" },
  3: { year: 1978, type: "Aquarelle", theme: "Bretagne" },
  4: { year: 1978, type: "Aquarelle", theme: "Bretagne" },
  5: { type: "Dessin au fusain", theme: "Provence" },
  6: { year: 1996, type: "Dessin au fusain", theme: "Provence" },
  7: { year: 2003, type: "Dessin au fusain", theme: "Provence" },
  8: { type: "Photographie", title: "Vue de l'atelier" },
  9: { year: 1978, type: "Aquarelle" },
  10: { theme: "Bretagne" },
  11: { year: 1995, type: "Dessin au fusain", theme: "Provence" },
  12: { year: 2003, type: "Aquarelle", theme: "Provence" },
  13: { type: "Dessin au fusain", theme: "Bretagne" },
  14: { year: 2001, type: "Dessin au fusain", theme: "Provence" },
  15: { year: 1996, type: "Dessin au fusain", theme: "Provence" },
  16: { year: 1995, type: "Aquarelle" },
  17: { type: "Dessin au fusain", theme: "Provence" },
  18: { type: "Aquarelle" },
  19: { year: 1999, type: "Dessin au fusain", theme: "Provence" },
  20: { year: 2001, type: "Dessin au fusain", theme: "Provence" },
  21: { year: 1993, type: "Dessin au fusain", theme: "Provence" },
  22: { year: 1985, type: "Aquarelle" },
  23: { year: 1985, type: "Aquarelle" },
  24: { type: "Aquarelle" },
  25: { type: "Aquarelle" },
  26: { type: "Aquarelle" },
  27: {
    year: 2003,
    type: "Dessin au fusain",
    title: "St Paul de M",
    theme: "Provence",
  },
  28: { year: 2001, type: "Dessin au fusain", theme: "Provence" },
  29: { type: "Dessin au fusain", theme: "Provence" },
  30: { year: 1985, type: "Acrylique", theme: "Bretagne" },
  31: { year: 2000, type: "Acrylique", theme: "Provence" },
  32: { year: 1982, type: "Acrylique", theme: "Provence" },
  33: { type: "Acrylique", theme: "Provence" },
  34: { year: 2001, type: "Dessin au fusain", theme: "Bretagne" },
  35: { year: 1980, type: "Acrylique", theme: "Provence" },
  36: { year: 1979, type: "Acrylique" },
  37: { year: 1985, type: "Acrylique", theme: "Provence" },
  38: { year: 1987, type: "Acrylique", theme: "Provence" },
  39: { type: "Acrylique" },
  40: { year: 1982, type: "Huile" },
  41: { type: "Dessin au crayon", theme: "Bretagne" },
  42: { year: 1996, type: "Dessin au crayon", theme: "Provence" },
  43: { year: 2003, type: "Aquarelle", theme: "Provence" },
  44: { year: 2003, type: "Dessin au fusain", theme: "Provence" },
  45: {
    year: 1983,
    type: "Dessin au crayon",
    title: "Eygalières",
    theme: "Provence",
  },
  46: {
    type: "Aquarelle",
    title: "Les-Baux-de-Provence",
    theme: "Provence",
  },
  47: { year: 1992, type: "Dessin au crayon", theme: "Provence" },
  48: {
    year: 1995,
    type: "Dessin au crayon",
    title: "Sainte Sixtine",
    theme: "Provence",
  },
  49: { year: 1972, type: "Aquarelle", theme: "Bretagne" },
  50: { year: 1978, type: "Aquarelle", theme: "Bretagne" },
  51: { type: "Aquarelle", theme: "Bretagne" },
  52: { type: "Aquarelle" },
  53: {
    year: 1981,
    type: "Dessin au crayon",
    title: "Forêt Engloutie - Vosges",
    theme: "Lorraine",
  },
  54: { year: 2001, type: "Huile", theme: "Provence" },
  55: { year: 1981, type: "Acrylique", theme: "Lorraine" },
  56: { year: 1997, type: "Dessin au fusain", theme: "Provence" },
  57: { year: 1997, type: "Dessin au fusain", theme: "Provence" },
  58: { year: 1978, type: "Aquarelle" },
  59: { year: 2000, type: "Dessin au fusain", theme: "Provence" },
  60: { year: 1993, type: "Dessin au fusain", theme: "Provence" },
  61: { year: 1995, type: "Dessin au fusain", theme: "Provence" },
  62: { year: 1996, type: "Dessin au fusain", theme: "Provence" },
  63: {
    type: "Gravure sur linoléum",
    title: "Epreuve d'artiste",
    theme: "Cubisme",
    dimensions: "34x24",
  },
  64: {
    year: 1995,
    type: "Acrylique",
    title: "Bassin d'Arcachon",
    theme: "Bretagne",
    dimensions: "80x53",
  },
};

const artworkFiles = artworkNumbers
  .map((number) => `100_${String(number).padStart(4, "0")}.jpg`)
  .concat(["20261017_094442.jpg", "20261017_094709.jpg"]);

const artworkEntries = artworkFiles.map((file, index) => ({
  file,
  index: index + 1,
  metadata: artworkMetadata[index + 1] ?? {},
}));

const artistPhotographs = artworkEntries
  .filter(({ metadata }) => metadata.type === "Photographie")
  .map(({ file, metadata }) => ({
    src: `images/${file}`,
    year: metadata.year ?? null,
    description: metadata.title ?? "",
  }));

const artworks = artworkEntries
  .filter(({ metadata }) => metadata.type !== "Photographie")
  .map(({ file, metadata }, index) => ({
    src: `images/${file}`,
    title: metadata.title ?? "",
    label: metadata.title || `Œuvre ${String(index + 1).padStart(2, "0")}`,
    year: metadata.year ?? null,
    type: metadata.type ?? "",
    theme: metadata.theme ?? "",
    dimensions: metadata.dimensions ?? "",
  }));

const grid = document.querySelector("#artwork-grid");
const dialog = document.querySelector("#lightbox");
const typeFilter = document.querySelector("#filter-type");
const themeFilter = document.querySelector("#filter-theme");
const periodFilter = document.querySelector("#filter-period");
const artworkCount = document.querySelector("#gallery-count");
const emptyGallery = document.querySelector("#gallery-empty");
const photographyGrid = document.querySelector("#photography-grid");
const photographyCount = document.querySelector("#photography-count");
const emptyPhotography = document.querySelector("#photography-empty");
const lightboxImage = dialog.querySelector(".lightbox-image");
const lightboxTitle = dialog.querySelector("#lightbox-title");
const lightboxDetails = dialog.querySelector("#lightbox-details");
const expandButton = dialog.querySelector(".lightbox-expand");
let activeArtworkIndex = 0;
let featuredArtworkIndex = -1;
let featuredImageIndex = 0;
let isFeaturedTransitioning = false;
const artworkCards = [];
const featuredImages = [
  ...document.querySelectorAll(".hero-artwork-visual img"),
];

function formatArtworkDetails(artwork) {
  return [artwork.year, artwork.type, artwork.theme].filter(Boolean).join(" · ");
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
populateFilter(themeFilter, artworkThemes);
populateFilter(
  periodFilter,
  artworkPeriods.map((period) => period.label),
);

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
  if (isFeaturedTransitioning) {
    return;
  }

  let nextIndex = Math.floor(Math.random() * artworks.length);
  while (artworks.length > 1 && nextIndex === featuredArtworkIndex) {
    nextIndex = Math.floor(Math.random() * artworks.length);
  }

  featuredArtworkIndex = nextIndex;
  const artwork = artworks[featuredArtworkIndex];
  const nextImageIndex = 1 - featuredImageIndex;
  const nextImage = featuredImages[nextImageIndex];
  isFeaturedTransitioning = true;

  const showArtwork = () => {
    nextImage.onload = null;
    nextImage.onerror = null;
    nextImage.alt = `${artwork.label} de René HAGUENAUER`;
    nextImage.removeAttribute("aria-hidden");
    nextImage.classList.add("is-visible");

    const currentImage = featuredImages[featuredImageIndex];
    currentImage.classList.remove("is-visible");
    currentImage.alt = "";
    currentImage.setAttribute("aria-hidden", "true");
    featuredImageIndex = nextImageIndex;

    document.querySelector(".hero-caption strong").textContent = artwork.label;
    const featuredYear = document.querySelector(".hero-artwork-year");
    featuredYear.textContent = formatArtworkDetails(artwork);
    featuredYear.hidden = !featuredYear.textContent;
    document.querySelector(".hero-index").textContent =
      `${String(featuredArtworkIndex + 1).padStart(2, "0")} / ${artworks.length}`;
    isFeaturedTransitioning = false;
  };

  nextImage.onload = showArtwork;
  nextImage.onerror = () => {
    nextImage.onload = null;
    nextImage.onerror = null;
    isFeaturedTransitioning = false;
    console.error(`Impossible de charger l’image mise en avant : ${artwork.src}`);
  };
  nextImage.src = artwork.src;
  if (nextImage.complete && nextImage.naturalWidth > 0) {
    showArtwork();
  }
}

showRandomFeaturedArtwork();
window.setInterval(showRandomFeaturedArtwork, 5000);

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
  lightboxDetails.replaceChildren();

  [
    ["Année", artwork.year],
    ["Type d’œuvre", artwork.type],
    ["Titre de l’œuvre", artwork.title],
    ["Thématique", artwork.theme],
    ["Dimensions (cm)", artwork.dimensions],
  ].forEach(([label, value]) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value || "Non renseigné";
    lightboxDetails.append(term, description);
  });
}

function filterArtworks() {
  let visibleCount = 0;
  artworkCards.forEach(({ card, artwork }) => {
    const matchesType = !typeFilter.value || artwork.type === typeFilter.value;
    const selectedPeriod = artworkPeriods.find(
      (period) => period.label === periodFilter.value,
    );
    const matchesTheme = !themeFilter.value || artwork.theme === themeFilter.value;
    const matchesPeriod =
      !selectedPeriod ||
      (artwork.year !== null &&
        artwork.year >= selectedPeriod.start &&
        artwork.year < selectedPeriod.end);
    card.hidden = !(matchesType && matchesTheme && matchesPeriod);
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
    artwork.theme,
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
themeFilter.addEventListener("change", filterArtworks);
periodFilter.addEventListener("change", filterArtworks);
document.querySelector("#filter-reset").addEventListener("click", () => {
  typeFilter.value = "";
  themeFilter.value = "";
  periodFilter.value = "";
  filterArtworks();
});

artistPhotographs.forEach((photograph) => {
  const card = document.createElement("figure");
  card.className = "photography-card";

  const image = document.createElement("img");
  image.src = photograph.src;
  image.alt = photograph.description
    ? `${photograph.description}, photographie de René HAGUENAUER`
    : "Photographie de la vie de René HAGUENAUER";
  image.loading = "lazy";
  image.decoding = "async";

  const caption = document.createElement("figcaption");
  caption.className = "artwork-caption";

  const description = document.createElement("strong");
  description.textContent = photograph.description || "Photographie";

  const year = document.createElement("span");
  year.textContent = photograph.year ?? "";

  caption.append(description, year);
  card.append(image, caption);
  photographyGrid.append(card);
});

photographyCount.textContent =
  `${artistPhotographs.length} photographie${artistPhotographs.length === 1 ? "" : "s"}`;
emptyPhotography.hidden = artistPhotographs.length > 0;

dialog.querySelector(".lightbox-close").addEventListener("click", () => {
  dialog.close();
});

expandButton.addEventListener("click", () => {
  const isExpanded = dialog.classList.toggle("lightbox--artwork-large");
  const label = isExpanded ? "Revenir à la fiche" : "Agrandir l’œuvre";
  expandButton.setAttribute("aria-label", label);
  expandButton.title = label;
  expandButton.setAttribute("aria-pressed", String(isExpanded));
  expandButton.textContent = isExpanded ? "⤡" : "⤢";
});

dialog.addEventListener("close", () => {
  dialog.classList.remove("lightbox--artwork-large");
  expandButton.setAttribute("aria-label", "Agrandir l’œuvre");
  expandButton.title = "Agrandir l’œuvre";
  expandButton.setAttribute("aria-pressed", "false");
  expandButton.textContent = "⤢";
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
