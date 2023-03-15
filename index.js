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
        console.log({ id });
        //Weather

        //Show results
        console.log("Information: \n".green);
        console.log("Place: ");
        console.log("Lt: ");
        console.log("Ln: ");
        console.log("Temperature: ");
        console.log("Min: ");
        console.log("Max: ");
        break;

      case 2:
        console.log("You choose option 2");
        break;
    }

    await inquirerPause();
  } while (option !== 0);
};

main();
