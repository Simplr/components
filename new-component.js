const fs = require("fs");
const ncp = require("ncp").ncp;

const args = process.argv;
const newComponentName = args.pop();

if (newComponentName.includes("/") || newComponentName.includes("\\")) {
    console.log("Please provide a one word component name");
    return;
}

const newComponentNameLower = newComponentName.toLowerCase();
const newComponentNameUpper = newComponentName.substring(0, 1).toUpperCase() + newComponentName.substring(1);
console.log("Creating component " + newComponentName);

const COMPONENTS_DIR = "./src/components";
const TEMPLATE_DIR = COMPONENTS_DIR + "/template";

const targetDir = COMPONENTS_DIR + "/" + newComponentName;

function createFiles() {
    ncp(TEMPLATE_DIR, targetDir, err => {
        if (err) {
            console.error("ERROR ", err);
            return;
        }

        fs.readdir(targetDir, (err, files) => {
            files.forEach(file => {
                let fileContent = fs.readFileSync(targetDir + "/" + file, "utf8");
                fileContent = fileContent.replace(/Template/g, newComponentNameUpper);
                fileContent = fileContent.replace(/template/g, newComponentNameLower);
                const newFileName = file.replace(/template/g, newComponentNameLower);
                fs.writeFileSync(targetDir + "/" + newFileName, fileContent, 'utf8', err => {
                    console.error(`Error writing file ${file}`, err);
                });
                if (file.includes("template")) {
                    fs.rmSync(targetDir + "/" + file);
                }
            });
        });

        console.log("Done.");
    });

}

function modifyTsConfig() {
    const tsconfig = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"));
    tsconfig.references = [{ path: targetDir }, ...tsconfig.references];
    fs.writeFileSync("tsconfig.json", JSON.stringify(tsconfig, null, 2), "utf8");
}

function createStory() {
    const storyPath = "stories/template.stories.ts";
    let fileContent = fs.readFileSync(storyPath, "utf8");
    fileContent = fileContent.replace(/Template/g, newComponentNameUpper);
    fileContent = fileContent.replace(/template/g, newComponentNameLower);
    fileContent = fileContent.replace("//", ""); // Remove commented import
    const targetPath = storyPath.replace("template", newComponentNameLower);
    fs.writeFileSync(targetPath, fileContent, "utf8");
}

createFiles();
modifyTsConfig();
createStory();

console.log("Done. Please run 'npm install'");
