// ========== Imports
const chalk = require("chalk");

// ========== Functions
const handleFigletMsg = (err, data) => {
    if (err) {
        console.log("Error, something went wrong.");
        console.dir(err);
        return;
    };

    // handle text for adding padding
    console.log("\n");
    const lines = data.split('\n');
    const paddedLines = lines.map(line => " ".repeat(3) + line + " ".repeat(3));
    const paddedText = paddedLines.join("\n");
    console.log(`\n${chalk.magenta(paddedText)}\n`);
    console.log(`  ${chalk.italic.magenta("CLI that automatically installs custom software and loads dotfiles.")}`);
    console.log(`  ${chalk.italic.bold.magenta("Under development. Use at your own risk.")}\n`);
};

// ========== Exports
module.exports = {
    handleFigletMsg,
};