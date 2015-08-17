'use strict';

/**
 * Grunt Module
 */
module.exports = function (grunt) {

  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    bisk: {
      css: 'src/css',
      js: 'src/js'
    },
    watch: {
      sass: {
        files: ['<%= bisk.css %>/{,*/}*.{scss, sass}'],
        tasks: ['sass:dist']
      },
      scsslint: {
        files: ['<%= bisk.css %>/{,*/}*.{scss, sass}'],
        tasks: ['scsslint']
      },
      uglify: {
        files: ['<%= bisk.js %>/{,**/}*.js'],
        tasks: ['uglify:dist']
      },
      jshint: {
        files: ['<%= bisk.js %>/{,**/}*.js'],
        tasks: ['jshint']
      }
    },
    scsslint: {
      allFiles: [
        '<%= bisk.css %>/{,*/}*.scss',
      ],
      options: {
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-reporter.xml',
        colorizeOutput: true
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          src: ['<%= bisk.css %>/{,*/}*.scss'],
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/frontend.min.js.map'
        },
        files: {
          'js/frontend.min.js': [
          ]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '<%= bisk.js %>/{,**/}*.js'
      ]
    }
  });

  grunt.registerTask('build', 'Minify Sass and Javascript', [
    'sass:dist',
    'uglify:dist'
  ]);

  grunt.registerTask('check', 'Lints Sass and Javascript', [
    'scsslint',
    'jshint'
  ]);

  grunt.registerTask('default', 'Lint, Minify, and Watch', [
    'check',
    'build',
    'watch'
  ]);
};
