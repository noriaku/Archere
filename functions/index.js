// ========== Imports
const { installArchPackages } = require("./installArchPackages.js");
const { installFlatpakPackages } = require("./installFlatpakPackages.js");
const { handleExitPrompt } = require("./handleExitPrompt.js");
const { handleFigletMsg } = require("./handleFigletMsg.js");

// ========== Exports
module.exports = {
    installArchPackages,
    installFlatpakPackages,
    handleExitPrompt,
    handleFigletMsg,
};