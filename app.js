// ========== Imports
const inquirer = require("inquirer");
const figlet = require("figlet");

const { questionsPrompt, figletConfigText } = require("./utils/")
const { installArchPackages, installFlatpakPackages, installDotfiles, handleExitPrompt, handleFigletMsg } = require("./functions/")

// ========== setup
let invoqueExit = false; 

async function main() {
    console.clear();
    await figlet("Archere", figletConfigText, (err, data) => handleFigletMsg(err, data));

    // handle exit
    if (invoqueExit) return;

    // asyncronous function -> wait until conclude
    const userAns = await inquirer.prompt(questionsPrompt);
    switch (userAns.packageType) {
    case "Arch packages":
        await installArchPackages(main);
        break;
    case "Flatpak packages":
        await installFlatpakPackages(main);
        break;
    case "Dotfiles setup":
        await installDotfiles(main);
        break;
    case "Exit": 
        handleExitPrompt();
        invoqueExit = true;
        return;
    };
};

main();