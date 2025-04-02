module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/app/app.component.spec.ts',
            'src/app/entry/entry.component.spec.ts',
            'src/app/external-api/external-api.component.spec.ts'
        ],
        browsers: ['Chrome'],
        singleRun: true
    });
};