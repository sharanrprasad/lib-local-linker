const ssLinker = require("../methods/linker");
const { packagesToBeLinked,absolutePathToDsReact, absolutePathToSelfService  } = require('../constants');

ssLinker(packagesToBeLinked,absolutePathToDsReact,absolutePathToSelfService);