const artworkEntries = window.galleryCatalogue.artworks;
const artistPhotographs = window.galleryCatalogue.photographs.map((photograph) => ({
  src: `Photographies/${photograph.file}`,
  year: photograph.year,
  description: photograph.description,
}));
const artworkTypes = [
  ...new Set(
    artworkEntries.map(({ metadata }) => metadata.type).filter(Boolean),
  ),
];
const artworkThemes = [
  ...new Set(
    artworkEntries.map(({ metadata }) => metadata.theme).filter(Boolean),
  ),
];
const artworkPeriods = [
  { label: "1945-1960", start: 1945, end: 1960 },
  { label: "1960-1970", start: 1960, end: 1970 },
  { label: "1970-1980", start: 1970, end: 1980 },
  { label: "1980-1990", start: 1980, end: 1990 },
  { label: "1990-2000", start: 1990, end: 2000 },
  { label: "2000-2010", start: 2000, end: 2011 },
];
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
const siteVisitCounterContainer = document.querySelector(
  "#site-visit-counter-container",
);
const siteVisitCounter = document.querySelector("#site-visit-counter");
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

if (
  window.location.protocol !== "file:" &&
  !window.location.hostname.endsWith(".localhost")
) {
  siteVisitCounterContainer.hidden = false;
  siteVisitCounter.src = `${siteVisitCounter.dataset.counterUrl}&visit=${Date.now()}`;
}

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
window.setInterval(showRandomFeaturedArtwork, 10000);

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
