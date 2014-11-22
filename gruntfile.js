'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      options: {
          livereload: true
      },
      reload: {
        files : ['*']
      },
      scss: {
          files: ['src/css/*.scss', 'src/css/*/*.scss'],
          tasks: ['sass', 'cssmin'],
          options: {
              spawn: false
          }
      },
      js: {
          files: ['src/js/*.js', 'src/js/*/*.js'],
          tasks: ['concat','uglify'],
          options: {
              spawn: false
          }
      },
      img: {
          files: ['images/*', 'images/*/*'],
          tasks: ['imagemin'],
          options: {
              spawn: false
          }
      },
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          require: 'susy'
        },
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['style.scss'],
          dest: 'src/css/build',
          ext: '.css'
        }]
      }
    }, 

    autoprefixer: {
      options: {
        browsers: ['last 4 versions', 'ie 8', 'ie 9', ]
      },
      dist: {
        files: {
          'src/css/build/style.css': 'src/css/build/style.css'
        }
      }
    },

    cssmin: {
      compile: {
        files: {
         'dist/css/style.min.css': ['src/css/build/style.css']
        } 
      }
    },

    concat: {
      dist: {
        src: ['src/js/models/*.js', 'src/js/views/*.js', 'src/js/controllers/*.js'],
        dest: 'src/js/build/build.js'
      }
    },

    uglify: {
      options: {
        banner: '/************************************/\n' +
                ' * @author: Jack Boyce     \n' +
                ' * @updated: ' + (new Date()).toDateString() + '\n' +
                '/************************************/\n'+
                '\n'
            },
      compile: {
        files: {
        'dist/js/build.min.js': ['src/js/build/build.js']
        }
      }
    },

    });

    // Load tasks from NPM
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-notify');

    // Default task.
    grunt.registerTask('default', ['watch']);

};

