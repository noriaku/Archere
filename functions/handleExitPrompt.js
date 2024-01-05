// ========== Imports
const chalk = require("chalk");

// ========== Functions
const handleExitPrompt = async () => {
    console.log(chalk.italic.magenta("\n  Thanks for your preference. See you later!"));
    console.log(chalk.italic.magenta("  Author: "), "@noriaku");
    console.log(chalk.italic.magenta("  Website:"), "www.noriaku.dev");
    console.log("\n");
    process.exit();
};

// ========== Exports
module.exports = {
    handleExitPrompt
};