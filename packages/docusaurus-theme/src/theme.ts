const { darkTheme } = require('@inventare/prisma-theme');

export function setupThemeConfig(config: any) {
    config.themeConfig.prism.darkTheme = darkTheme;
}
