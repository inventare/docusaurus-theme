import { setupClassicConfig } from './preset';
import { setupThemeConfig } from './theme';

export function extendsTheme(config: any) {
    setupClassicConfig(config);
    setupThemeConfig(config);
    
    return config;
}
