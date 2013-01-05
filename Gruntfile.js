module.exports = function(grunt) {

  //additional task imports
  grunt.loadNpmTasks('grunt-dustjs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    dustjs: {
      compile: {
        files: {
          "temp/scripts/dust-templates.js": ["app/scripts/**/*.dust"]
        }
      }
    },
    clean: {
      temp: ['temp']
    },
    concat: {
      dist: {
        src: ["app/scripts/init.js","app/scripts/vendor/jquery.min.js","app/scripts/vendor/lodash.min.js","app/scripts/vendor/dust-core.min.js","app/scripts/vendor/dust-helpers.min.js","app/scripts/vendor/backbone-min.js", "temp/scripts/dust-templates.js", "app/scripts/models/*.js","app/scripts/collections/*.js","app/scripts/views/*.js","app/scripts/routes/*.js", "app/scripts/main.js"],
        dest: 'temp/scripts/include.js'
      },
      styles: {
        src: ["app/styles/*.css"],
        dest: 'temp/styles/main.css'
      }
    },
    copy: {
      dist:{
        files: {
          'temp/': ['app/*']
        }
      }
    },
    connect: {
      server: {
        options: {
          port:3000,
          base: 'temp'
        }
      }
    },
    watch: {
      dustjs: {
        files: ['app/scripts/**/*.dust'],
        tasks: ['dustjs','concat']
      },
      concat: {
        files: ['app/scripts/**/*.js','app/styles/**/*.css'],
        tasks: ['concat','copy']
      },
      concat_main: {
        files: ['app/*'],
        tasks: 'copy'
      }
    }

  });

  grunt.registerTask("default", ["clean","copy", "dustjs","concat"]);
  grunt.registerTask("server", ["default","connect","watch"]);
}
