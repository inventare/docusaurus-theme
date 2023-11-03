import { setupClassicConfig } from './preset';
import { setupThemeConfig } from './theme';
import BlogListPage from './BlogListPage';

export function extendsTheme(config: any) {
    setupClassicConfig(config);
    setupThemeConfig(config);
    
    return config;
}

export { BlogListPage }

