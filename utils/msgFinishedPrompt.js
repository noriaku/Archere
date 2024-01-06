// ========== Imports
const chalk = require("chalk");

// ========== Functions
const msgFinishedPrompt = async () => {
    console.log(chalk.italic.magenta("\n  Work Done"));
    console.log(chalk.italic.bold.magenta("  Returning to menu in 5 seconds..."));
    await new Promise(resolve => setTimeout(resolve, 5000));
};

// ========== Exports
module.exports = {
    msgFinishedPrompt
};