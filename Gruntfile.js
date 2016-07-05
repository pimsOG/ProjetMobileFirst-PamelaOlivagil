'use strict';

module.exports = function(grunt) {

  // Chargement de toutes les taches
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  /**
   * [template_url] == mise en place des variables
   */
  var config = {
    projet: "Batizado",
    theme: "./",
  }


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Compass
    // Fichiers compilés avec SASS & Compass

    compass: {

      default: {

          options: {

          app: 'stand_alone',
          basePath: config.theme,
          sourcemap: true,

          cssDir: 'css',
          sassDir: 'sass',
          imagesDir: 'img',
          javascriptsDir: 'js',

          force: true,

          outputStyle: 'expanded',
          noLineComments: false,
          relativeAssets: true,
          environment: 'development'
          // require: 'susy'
        },

      },

    },

    // Image Min
    // Optimisation des images

    imagemin: {

      default: {
        options: {
          optimizationLevel: 5,
          progressive: true,
        },
        files: [{
          expand: true,
          cwd: config.theme + 'img/',
          src: ['**/*.{png,jpg,gif,jpeg}'],
          dest: config.theme + 'img/',
        }]
      }
    },



    concat: {

      js: {
        files: [{
          src: [config.theme + 'js/plugins/*.js'],
          dest: config.theme + 'js/plugins.js'
        }]
      }
    },



    // Watch

    watch: {

      options: {
        livereload: true
      },

      compass: {
        files: [ config.theme + 'sass/**/*.{scss,sass}'],
        tasks: ['compass:default']
      },

      js: {
          files: [ config.theme + 'js/scripts.js', config.theme + 'js/plugins/*.js'],
          tasks: ['concat:js']
      },

      img: {
          files: [ config.theme + 'img/**/*.{png,jpg,gif,jpeg}'],
          tasks: ['imagemin']
      },

    },

  });


/**
 * Création des tâches
 */

grunt.registerTask('default', ['watch']);

};
