// ========== Imports
const inquirer = require("inquirer");
const figlet = require("figlet");

const { questionsPrompt, figletConfigText } = require("./utils/")
const { installArchPackages, installFlatpakPackages, handleExitPrompt, handleFigletMsg } = require("./functions/")

// ========== setup
let invoqueExit = false; 

async function main() {
    await figlet("Arch Dotfiles", figletConfigText, (err, data) => handleFigletMsg(err, data));

    // handle exit
    if (invoqueExit) return;

    // asyncronous function -> wait until conclude
    const userAns = await inquirer.prompt(questionsPrompt);
    switch (userAns.packageType) {
    case "Arch Packages":
        await installArchPackages();
        break;
    case "Flatpak Packages":
        await installFlatpakPackages();
        break;
    case "Exit": 
        handleExitPrompt();
        invoqueExit = true;
        return;
    };
    setImmediate(main);
};

main();