// ========== Imports
const chalk = require("chalk");
const { exec } =  require("child_process");

const flatpakPackages = require("../packages/flatpakPackages.json");
const { msgFinishedPrompt } = require("../utils/");

// ========== Functions
const installEachPackage = async (eachPackage) => {
    return new Promise((resolve, reject) => {
        console.log(`${chalk.italic.magenta("  Installing")} ${chalk.bold.blue(eachPackage)}`);
        exec(`flatpak install flathub -y ${eachPackage}`, (err, stdout, stderr)  => {
            // manage error & message it via console
            if (err || stderr) {
                console.log(chalk.bold.italic.red(`  Error installing ${eachPackage}: ${err ? err.message : stderr}`));
            } else {
                let statusMessage = `${chalk.italic.green("Installed OK:")} ${chalk.bold.blue(eachPackage)}\n`;
                console.log(`  ${statusMessage}`);
            };
            // if error appears, print in console but continue with next packages 
            resolve();
        });
    });
};

const installFlatpakPackages = async (main) => {
    const flatpakPackagesJson = flatpakPackages.packages;

    // iterate over each package, you can add and delete them!
    for (const eachPackage of flatpakPackagesJson) {
        try {
            await installEachPackage(eachPackage);
        } catch (err) {
            console.error(err);
            process.exit();
        };
    };
    await msgFinishedPrompt();
    setImmediate(main);
};

// ========== Exports
module.exports = {
    installFlatpakPackages
};