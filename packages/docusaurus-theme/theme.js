const { darkTheme } = require('@inventare/prisma-theme');

function setupThemeConfig(config) {
    console.log("OIE???")
    console.log(darkTheme);

    config.themeConfig.prism.darkTheme = darkTheme;
}

module.exports = {
    setupThemeConfig
}
