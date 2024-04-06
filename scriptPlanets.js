let planets = [];
let currentPlanetIndex = 0;

const fetchPlanets = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/planets/');
    const data = await response.json();
    planets = data.results;
    displayPlanetDetails(currentPlanetIndex);
  } catch (error) {
    console.log('Error:', error);
  }
};

const displayPlanetDetails = (index) => {
  const planet = planets[index];
  const name = planet.name;
  const terrain = planet.terrain;
  const climate = planet.climate;
  const diameter = planet.diameter;

  const planetName = document.querySelector('.planet-name');
  const planetTerrain = document.querySelector('.planet-terrain');
  const planetClimate = document.querySelector('.planet-climate');
  const planetDiameter = document.querySelector('.planet-diameter');

  planetName.textContent = name;
  planetTerrain.textContent = terrain;
  planetClimate.textContent = climate;
  planetDiameter.textContent = diameter;
};

const previousPlanet = () => {
  currentPlanetIndex--;
  if (currentPlanetIndex < 0) {
    currentPlanetIndex = planets.length - 1;
  }
  displayPlanetDetails(currentPlanetIndex);
};

const nextPlanet = () => {
  currentPlanetIndex++;
  if (currentPlanetIndex >= planets.length) {
    currentPlanetIndex = 0;
  }
  displayPlanetDetails(currentPlanetIndex);
};

document.querySelector('.previous-button').addEventListener('click', previousPlanet);
document.querySelector('.next-button').addEventListener('click', nextPlanet);

fetchPlanets();