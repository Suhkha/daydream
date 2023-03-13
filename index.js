const { readInput } = require("./helpers/inquirer");

const main = async () => {
  const text = await readInput("Hello: ");

  console.log(text);
};

main();
