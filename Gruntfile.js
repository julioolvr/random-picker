module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: 'public'
        }
      }
    },
    browserify: {
      options: {
        transform: [require('grunt-react').browserify]
      },
      app: {
        src: 'app/index.js',
        dest: 'public/app.js'
      }
    },
    watch: {
      browserify: {
        files: ['app/**/*.{js,jsx}'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);
};
