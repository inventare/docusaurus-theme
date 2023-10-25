const { darkTheme } = require('@inventare/prisma-theme');

function setupThemeConfig(config) {
    config.themeConfig.prism.darkTheme = darkTheme;
}

module.exports = {
    setupThemeConfig
}
