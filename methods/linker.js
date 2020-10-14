const util = require('util');
const exec = util.promisify(require('child_process').exec);
const unLinkAnyExistingPackages  = require('./unlinker')

async function linkPackages(packagesToBeLinked,absolutePathToLib,absolutePathToProject) {
    await unLinkAnyExistingPackages();
    await Promise.all(packagesToBeLinked.map(async package => {
            const projectResult =    await exec(`cd ${absolutePathToProject}\\node_modules\\${package} && yarn link`);
            console.log(projectResult.stdout);
            const libReactResult =   await exec(`cd ${absolutePathToLib} && yarn link ${package}`);
            console.log(libReactResult.stdout);
        }
    ));
    await  exec(`cd ${absolutePathToLib} && yarn link`);
    await exec(`cd ${absolutePathToProject} && yarn link ds-react-components`);
};


module.exports = linkPackages;
