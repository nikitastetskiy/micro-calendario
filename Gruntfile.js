module.exports = function (grunt) {
    // Plugins
    grunt.loadNpmTasks('grunt-run');

    grunt.initConfig({
        run: {
            install: {},

            build: {},

            test: {
                cmd: 'npm',
                args: ['run', 'test'],
            },
        },
    });

    // Tareas
    grunt.registerTask('default', ['run:install']);
    grunt.registerTask('build', ['run:build']);
    grunt.registerTask('install', ['run:install']);
    grunt.registerTask('test', ['run:test']);
};
