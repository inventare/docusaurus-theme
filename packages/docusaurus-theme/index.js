const { setupClassicConfig } = require('./preset');
const { setupThemeConfig } = require('./theme');

function extendsTheme(config) {
    setupClassicConfig(config);
    setupThemeConfig(config);
    
    return config;
}

module.exports = { extendsTheme };
