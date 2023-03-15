require("dotenv").config();

const {
  readInput,
  inquirerMenu,
  inquirerPause,
  displayPlaces,
} = require("./helpers/inquirer");
const Searches = require("./models/searches");

const main = async () => {
  console.clear();

  let option = "";
  const searches = new Searches();

  do {
    // show menu
    option = await inquirerMenu();

    switch (option) {
      case 1:
        //Get message
        const place = await readInput("Place to search: ");

        //Search places
        const places = await searches.place(place);

        //Select the place
        const id = await displayPlaces(places);
        const selectedPlace = places.find((p) => p.id === id);

        //Weather
        const lat = selectedPlace.lat;
        const lon = selectedPlace.lon;

        const weather = await searches.weatherPlace(lat, lon);

        //Show results
        console.log("Information: \n".green);
        console.log("Place:", selectedPlace.name);
        console.log("Lt:", lat);
        console.log("Ln:", lon);
        console.log("Temperature:", weather.temp);
        console.log("Min:", weather.min);
        console.log("Max:", weather.max);
        console.log("Description:", weather.desc);
        break;

      case 2:
        console.log("You choose option 2");
        break;
    }

    await inquirerPause();
  } while (option !== 0);
};

main();
