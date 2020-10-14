const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function unLinkAnyExistingPackages(packagesToBeLinked,absolutePathToLib, absolutePathToProject) {
    try {
        await Promise.all(packagesToBeLinked.map(async packageName => {
            await exec(`cd ${absolutePathToProject}\\node_modules\\${packageName} && yarn unlink`);
            await exec(`cd ${absolutePathToLib} && yarn unlink ${packageName}`);
        }));
    }catch (e) {
        console.log(e);
    }
    try {
        await exec(`cd ${absolutePathToProject} && yarn unlink ds-react-components`);
        await exec(`cd ${absolutePathToLib} && yarn unlink`);
    }
    catch (e) {
        console.log(e);
    }
};

module.exports= unLinkAnyExistingPackages;
