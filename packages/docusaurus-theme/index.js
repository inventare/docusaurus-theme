const { getClassicPreset, setClassicPreset } = require('./preset');
const { setupThemeConfig } = require('./theme');

function extendsTheme(config) {
    const { classic, index } = getClassicPreset(config);

    classic[1] = {
        ...classic[1],
        theme: {
            customCss: [
                require.resolve('@inventare/docusaurus-theme-colors/colors.css'),
                require.resolve('./theme.css'),
            ],
        },
    }

    setClassicPreset(config, { index, classic });
    setupThemeConfig(config);
    
    return config;
}

module.exports = { extendsTheme };
