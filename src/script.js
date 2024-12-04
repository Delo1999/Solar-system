//// Importerar queryselectors och variabel urlen från annan modul för att kunna använda de i denna modul
import { querySelectors, url } from "./script2.js";

//FUNKTIONER
const getApiKey = async () => {
  const response = await fetch(url, { method: "POST" });
  const data = await response.json();
  return data.key;
};

const getBodies = async () => {
  const apiKey = await getApiKey();

  const response = await fetch(
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
    {
      method: "GET",
      headers: { "x-zocom": apiKey },
    }
  );

  const data = await response.json();

  return data.bodies;
};

const getInfo = async (index) => {
  const bodies = await getBodies();
  querySelectors.planetName.textContent = `${bodies[index].name.toUpperCase()}`;
  querySelectors.latinName.textContent = `${bodies[
    index
  ].latinName.toUpperCase()}`;
  querySelectors.description.textContent = `${bodies[index].desc}`;
  querySelectors.circumference.textContent = `${bodies[index].circumference} km`;
  querySelectors.distance.textContent = `${bodies[index].distance} km`;
  querySelectors.maxTemp.textContent = `${bodies[index].temp.day} °C`;
  querySelectors.minTemp.textContent = `${bodies[index].temp.night} °C`;
  querySelectors.moons.textContent = bodies[index].moons.join(", ");
};

const displayPopup = () => {
  querySelectors.popup.style.display = "flex";
};

const displayHeadlines = () => {
  querySelectors.headlines.style.display = "flex";
};

const hideHeadlines = () => {
  querySelectors.headlines.style.display = "none";
};

const displayPlanets = () => {
  querySelectors.planets.style.display = "flex";
};

const hidePlanets = () => {
  querySelectors.planets.style.display = "none";
};

const changeColorPlanet = (e) => {
  const backgroundColor = window.getComputedStyle(e.target).backgroundColor;
  querySelectors.sidePanel.style.background = backgroundColor;
};

const showPlanet = async (index, e) => {
  await getInfo(index);
  displayPopup();
  hideHeadlines();
  hidePlanets();
  changeColorPlanet(e);
};

const displayHeadlinesandPlanets = (e) => {
  if (e.key === "Escape") {
    querySelectors.popup.style.display = "none";
    displayHeadlines();
    displayPlanets();
  }
};

//
export { showPlanet, displayHeadlinesandPlanets };
