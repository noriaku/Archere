// ========== Imports
const chalk = require("chalk");

// ========== Functions
const questionsPrompt = [
    {
        type: "list",
        prefix: chalk.magenta(" "),
        name: "packageType",
        message: chalk.bgMagenta.black.bold("¿What type of packages do you want to install?"),
        choices: [ 
            { name: chalk.italic.white("1. Arch packages"), value: "Arch packages" },
            { name: chalk.italic.white("2. Flatpak packages"), value: "Flatpak packages" },
            { name: chalk.italic.white("3. Dotfiles setup"), value: "Dotfiles setup" },
            { name: chalk.italic.red("Exit"), value: "Exit" }
        ],
    },
]

// ========== Exports
module.exports = {
    questionsPrompt
};