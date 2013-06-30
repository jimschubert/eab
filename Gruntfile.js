'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        nodeunit: {
            files: ['test/**/*_test.js']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            app: {
                src: ['src/**/*.js', "!src/public/lib/**/*.js", "!src/public/javascripts/vendor/**/*.js"]
            },
            test: {
                src: ['test/**/*.js', "!test/lib/**/*.js", "!test/unit/**/*.js", "!test/e2e/**/*.js"]
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            app: {
                files: '<%= jshint.app.src %>',
                tasks: ['jshint:app', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            }
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            },
            e2e: {
                configFile: 'config/karma-e2e.conf.js',
                singleRun: true
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    // note: to run karma in continuous (autowatch) mode, run it directly:
    // unit tests:
    //      karma start config/karma.conf.js
    // e2e tests:
    //      karma start config/karma-e2e.conf.js
    grunt.registerTask('default', ['jshint', 'nodeunit', 'karma']);

};
