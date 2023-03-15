require("dotenv").config();

const {
  readInput,
  inquirerMenu,
  inquirerPause,
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
        const place = await readInput("City to search: ");

        //Search places
        await searches.city(place);

        //Select the place

        //Weather

        //Show results
        console.log("Information: \n".green);
        console.log("City: ");
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
