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
            { name: chalk.italic("Arch Packages"), value: "Arch Packages" },
            { name: chalk.italic("Flatpak Packages"), value: "Flatpak Packages" },
            { name: chalk.italic("Exit"), value: "Exit" }
        ],
    },
]

// ========== Exports
module.exports = {
    questionsPrompt
};