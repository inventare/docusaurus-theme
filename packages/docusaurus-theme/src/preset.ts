function getClassicPreset (config: any) {
    if (!config.presets || !config.presets.length) {
        throw new Error('No presets was found at config.');
    }
    const classicIndex = config.presets.findIndex((item: any) => {
        if (!Array.isArray(item)) {
            return false;
        }
        if (item.length < 2) {
            return false;
        }
        return item[0] === 'classic';
    });
    if (classicIndex < 0) {
        throw new Error('No classic preset was found at config.');
    }
    return {
        index: classicIndex,
        classic: config.presets[classicIndex],
    };
};

function setClassicPreset(config: any, { index, classic }: any) {
    config.presets[index] = classic;
}

export function setupClassicConfig(config: any) {
    const { classic, index } = getClassicPreset(config);

    classic[1] = {
        ...classic[1],
        blog: {
            ...(classic[1].blog || {}),
            showReadingTime: false,
            blogListComponent: '@inventare/docusaurus-theme/dist/BlogListPage',
        },
        theme: {
            customCss: [
                require.resolve('@inventare/docusaurus-theme-colors/colors.css'),
                require.resolve('./theme.css'),
            ],
        },
    }

    console.log(classic[1]);

    setClassicPreset(config, { index, classic });
}
