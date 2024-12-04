// Importerar två funktioner som används i eventlisteners
import { showPlanet, displayHeadlinesandPlanets } from "./script.js";

//QUERY SELECTORS
//Alla DOM-elemnt samlade på en plats för struktur samt enklare referering
const querySelectors = {
  popup: document.querySelector(".popup"),
  headlines: document.querySelector(".headlines"),
  planets: document.querySelector(".planets"),
  theSun: document.querySelector("#the-sun"),
  mercury: document.querySelector("#mercury"),
  venus: document.querySelector("#venus"),
  earth: document.querySelector("#earth"),
  mars: document.querySelector("#mars"),
  jupiter: document.querySelector("#jupiter"),
  saturn: document.querySelector("#saturn"),
  uranus: document.querySelector("#uranus"),
  neptune: document.querySelector("#neptune"),
  planetName: document.querySelector("#planet-name"),
  latinName: document.querySelector("#latin-name"),
  description: document.querySelector("#description"),
  circumference: document.querySelector("#circumference"),
  distance: document.querySelector("#distance"),
  maxTemp: document.querySelector("#max-temp"),
  minTemp: document.querySelector("#min-temp"),
  moons: document.querySelector("#moons"),
  sidePanel: document.querySelector("#sidepanel-planet"),
};

//VARIABLER
// Definierar URL:en till API:et för att hämta data
const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys";

//EVENTLISTENERS
querySelectors.theSun.addEventListener("click", async (e) => {
  showPlanet(0, e);
});

querySelectors.mercury.addEventListener("click", async (e) => {
  showPlanet(1, e);
});

querySelectors.venus.addEventListener("click", async (e) => {
  showPlanet(2, e);
});

querySelectors.earth.addEventListener("click", async (e) => {
  showPlanet(3, e);
});

querySelectors.mars.addEventListener("click", async (e) => {
  showPlanet(4, e);
});

querySelectors.jupiter.addEventListener("click", async (e) => {
  showPlanet(5, e);
});

querySelectors.saturn.addEventListener("click", async (e) => {
  showPlanet(6, e);
});

querySelectors.uranus.addEventListener("click", async (e) => {
  showPlanet(7, e);
});

querySelectors.neptune.addEventListener("click", async (e) => {
  showPlanet(8, e);
});

document.addEventListener("keydown", (e) => {
  displayHeadlinesandPlanets(e);
});

// Exporterar dessa variabler för att kunna använda i andra script filer om det skulle behövas
export { querySelectors, url };
