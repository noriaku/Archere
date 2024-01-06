// ========== Imports
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const inquirer = require("inquirer");
const { exec } = require("child_process");

const { msgFinishedPrompt } = require("../utils/");
const dotfilesConfigJSON = require("../dotfilesArchere/dotfilesFileStructure.json");

// ========== Functions
const getUserData = async () => {
    const promptUserData = await inquirer.prompt([
        {
            type: "input",
            name: "username",
            prefix: " ",
            message: "Please enter your linux username:",
            validate: (input) => input ? true : chalk.bold.red("Username cannot be empty!")
        }
    ]);
    return promptUserData.username;
};

const createParentFolder = async (userData) => {
    try {
        const localDotfiles = path.join(__dirname, "../dotfilesArchere");
        const targetPath = `/home/${userData}/dotfilesArchere`;

        if (!fs.existsSync(targetPath)) {
            fs.cpSync(localDotfiles, targetPath, { recursive: true });
            console.log(`${chalk.bold.green("  Created base directory at")} ${chalk.italic.magenta(targetPath)}`);
        } else {
            console.log(`${chalk.bold.green("  Directory exists at")} ${chalk.italic.magenta(targetPath)}\n`);
        }
    } catch (err) {
        console.log(`${chalk.bold.red("  Error invalid username. Use WHO command at terminal.")}`, err)
    };
};

const createSymbolicLinksRecursively = async (source, target) => {
    if (fs.lstatSync(source).isDirectory()) {
        // if is directory create
        if (!fs,fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });

        // recursively check if directory and create it, after check if file and link
        const itemsPath = fs.readdirSync(source);
        for (const eachItem of itemsPath) {
            const sourcePath = path.join(source, eachItem);
            const targetPath = path.join(target, eachItem);
            await createSymbolicLinksRecursively(sourcePath, targetPath);
        };
    } else {
        try {
            // create directory if no exists
            const targetDir = path.dirname(target);
            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
            // if target path exists, remove file/link
            if (fs.existsSync(target)) fs.unlinkSync(target);
            fs.symlinkSync(source, target);
            console.log(chalk.bold.green(`  Linked ${source} to ${target}`));
        } catch (err) {
            console.error(`  ${chalk.bold.red("Error occurred while linking:")} ${err.message}`);
        };
    };
};

const linkDotfiles = async (userData) => {
    for (const [key, value] of Object.entries(dotfilesConfigJSON)) {
        try {
            const src = path.join(`/home/${userData}/dotfilesArchere`, key);
            const dest = value.srcDest.replace('~', `/home/${userData}`);
    
            // create simbolic link, entering each folder & checking files
            const destDir = path.dirname(dest);
            if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

            await createSymbolicLinksRecursively(src, dest);
        } catch (err) { 
            console.log(`${chalk.bold.red("  Error something ocurred.")} ${err.message}`);
        };
    };
};

const installDotfiles = async (main) => {
    // idea: move all to dotfiles at /home/<user> (~) and linked to respectively config
    const userData = await getUserData(); 
    await createParentFolder(userData);
    await linkDotfiles(userData);
    
    await msgFinishedPrompt();
    setImmediate(main);
};

// ========== Exports
module.exports = {
    installDotfiles
};