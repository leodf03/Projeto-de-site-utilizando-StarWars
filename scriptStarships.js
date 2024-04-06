let starships = [];
let currentStarshipIndex = 0;

const fetchstarShips = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/starships/');
    const data = await response.json();
    starships = data.results;
    displayStarshipsDetails(currentStarshipIndex);
  } catch (error) {
    console.log('Error:', error);
  }
};

const displayStarshipsDetails = (index) => {
  const starship = starships[index];
  const name = starship.name;
  const model = starship.model;
  const manufacturer = starship.manufacturer;
  const cost_in_credits = starship.cost_in_credits;

  const starshipName = document.querySelector('.starship-name');
  const starshipModel = document.querySelector('.starship-model');
  const starshipManufacter = document.querySelector('.starship-manufacturer');
  const starshipCost_in_credits = document.querySelector('.starship-cost_in_credits');

  starshipName.textContent = name;
  starshipModel.textContent = model;
  starshipManufacter.textContent = manufacturer;
  starshipCost_in_credits.textContent = cost_in_credits;
};

const previousStarship = () => {
  currentStarshipIndex--;
  if (currentStarshipIndex < 0) {
    currentStarshipIndex = starships.length - 1;
  }
  displayStarshipsDetails(currentStarshipIndex);
};

const nextStarship = () => {
  currentStarshipIndex++;
  if (currentStarshipIndex >= starships.length) {
    currentStarshipIndex = 0;
  }
  displayStarshipsDetails(currentStarshipIndex);
};

document.querySelector('.previous-button').addEventListener('click', previousStarship);
document.querySelector('.next-button').addEventListener('click', nextStarship);

fetchstarShips();