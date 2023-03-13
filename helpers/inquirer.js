const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you wanna do?".magenta,
    choices: [
      {
        value: "1",
        name: `${"1.".magenta} Create task`,
      },
      {
        value: "2",
        name: `${"2.".magenta} Show tasks`,
      },
      {
        value: "3",
        name: `${"3.".magenta} Show completed tasks`,
      },
      {
        value: "4",
        name: `${"4.".magenta} Show pending tasks`,
      },
      {
        value: "5",
        name: `${"5.".magenta} Complete tasks`,
      },
      {
        value: "6",
        name: `${"6.".magenta} Delete task`,
      },
      {
        value: "0",
        name: `${"0.".magenta} Exit`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.log("===========================".rainbow);
  console.log("Select an option".bgMagenta);
  console.log("===========================\n".rainbow);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const inquirerPause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `PRESS ${"ENTER".green} TO CONTINUE`,
    },
  ];
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Enter a value";
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

const tasksToDelete = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}`.green;

    return {
      value: task.id,
      name: `${index} ${task.description}`,
    };
  });

  choices.unshift({
    value: 0,
    name: "0".green + " Cancel",
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Delete",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "isOkay",
      message,
    },
  ];

  const { isOkay } = await inquirer.prompt(question);
  return isOkay;
};

const checklistOfTasks = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}`.green;

    return {
      value: task.id,
      name: `${index} ${task.description}`,
      checked: task.completedDate ? true : false,
    };
  });

  const questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "Choices",
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(questions);
  return ids;
};

module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput,
  tasksToDelete,
  confirm,
  checklistOfTasks,
};
