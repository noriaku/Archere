// ========== Imports
const { exec } =  require("child_process");
const flatpakPackages = require("../packages/flatpakPackages.json");

// ========== Functions
const installFlatpakPackages = async () => {
    const flatpakPackagesJson = flatpakPackages.packages;
    console.log("Working Flatpak");
};

// ========== Exports
module.exports = {
    installFlatpakPackages
};