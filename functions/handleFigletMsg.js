// ========== Imports
const chalk = require("chalk");

// ========== Functions
const handleFigletMsg = (err, data) => {
    if (err) {
        console.log("Error, something went wrong.");
        console.dir(err);
        return;
    };
    console.log(chalk.bold.magenta(data));
};

// ========== Exports
module.exports = {
    handleFigletMsg,
};