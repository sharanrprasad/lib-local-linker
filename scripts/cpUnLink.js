const cpUnLinker = require('../customerPortalMethods/cpUnlinker');
const { packagesToBeLinked,absolutePathToDsReact, absolutePathToCustomerPortal } = require('../constants');

cpUnLinker(packagesToBeLinked,absolutePathToDsReact,absolutePathToCustomerPortal);
