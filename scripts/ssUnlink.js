const ssUnlinker = require('../methods/unlinker');
const { packagesToBeLinked,absolutePathToDsReact, absolutePathToSelfService  } = require('../constants');

ssUnlinker(packagesToBeLinked,absolutePathToDsReact,absolutePathToSelfService);