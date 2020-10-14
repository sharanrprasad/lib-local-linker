const cpLinker = require('../customerPortalMethods/cpLinker');
const { packagesToBeLinked,absolutePathToDsReact, absolutePathToCustomerPortal } = require('../constants');

cpLinker(packagesToBeLinked,absolutePathToDsReact,absolutePathToCustomerPortal);