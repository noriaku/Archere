// ========== Imports
const chalk = require("chalk");
const { exec } =  require("child_process");

const archPackages = require("../packages/archPackages.json");
const { msgFinishedPrompt } = require("../utils/");

// ========== Functions
const installEachPackage = async (eachPackage) => {
    return new Promise((resolve, reject) => {
        console.log(`${chalk.italic.magenta("  Installing")} ${chalk.bold.blue(eachPackage)}`);
        exec(`yay -S --noconfirm ${eachPackage}`, (err, stdout, stderr) => {
            // if reinstall ocurred, do it
            let stderrMsgReinstall = stderr.includes('is up to date -- reinstalling');

            // manage error & message it via console
            if (err || (stderr && !stderr.includes('is up to date -- reinstalling'))) {
                console.log(chalk.bold.italic.red(`  Error installing ${eachPackage}: ${err ? err.message : stderr}`));
            } else {
                let statusMessage = stderrMsgReinstall  ? `${chalk.italic.bold.blue(eachPackage)} it's up to date.` : `${chalk.italic.green("Installed OK:")} ${chalk.bold.blue(eachPackage)}\n`;
                console.log(`  ${statusMessage}`);
            };

            // if error appears, print in console but continue with next packages 
            resolve();
        });
    });
};

const installArchPackages = async (main) => {
    const archPackagesJson = archPackages.packages;

    // iterate over each package, you can add and delete them!
    for (const eachPackage of archPackagesJson) {
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
    installArchPackages
};