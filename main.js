async (options) => {
    options.plugins.push('@babel/plugin-syntax-flow');
    options.presets.push('@babel/preset-typescript');
    return options;
};
