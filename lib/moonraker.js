var session     = require('./env/session'),
    Page        = require('./page-object/page'),
    Component   = require('./page-object/component'),
    nconf       = require('nconf'),
	  fs = require('fs');

if (fs.existsSync('../../../dynamic-config')) {
	var customConfig = require('../../../dynamic-config');
	nconf.overrides(customConfig).argv().env().file('config.json');
} else {
	nconf.argv().env().file('config.json');
}

exports = module.exports = {
  config:    nconf.get(),
  session:   session,
  Page:      Page,
  Component: Component
};
