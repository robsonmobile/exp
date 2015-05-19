'use strict';

var _ = require('lodash-node');

var commands = {

  // Basic
  init: require('./init'),
  start: require('./pm2serve').start,
  url: require('./url'),
  stop: require('./pm2serve').stop,
  restart: _.clone(require('./pm2serve').start),
  send: require('./send'),

  // Publishing
  adduser: require('./adduser'),
  login: require('./login'),
  whoami: require('./whoami'),
  publish: require('./publish'),

  // Advanced
  bundle: require('./bundle'),
  status: require('./status'),
  logs: require('./logs') };

commands.restart.name = 'restart';
commands.restart.description = 'This is an alias of `start`. They both can be used to start or restart exp-serve';

module.exports = commands;
//# sourceMappingURL=../sourcemaps/commands/commands.js.map