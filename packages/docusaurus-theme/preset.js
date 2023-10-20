function getClassicPreset (config) {
    if (!config.presets || !config.presets.length) {
        throw new Error('No presets was found at config.');
    }
    const classicIndex = config.presets.findIndex((item) => {
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

function setClassicPreset(config, { index, classic }) {
    config.presets[index] = classic;
}

module.exports = {
    getClassicPreset,
    setClassicPreset,
}
