// Generated on 2014-01-31 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    tomcat_deploy: {
      host: 'localhost',
      login: 'tomcat',
      password: 'tomcat',
      path: '/mfm',
      port: 8081,
      dist: 'dist',
      deploy: '/manager/text/deploy',
      undeploy: '/manager/text/undeploy',
    },
    war: {
      target: {
        options: {
          war_dist_folder: 'dist',
          war_verbose: true,
          war_name: 'mfm',
          webxml_welcome: 'index.html',
          webxml_display_name: 'MFM',
          webxml_mime_mapping: [
          { extension: 'js', mime_type: 'text/javascript' } ,
          { extension: 'css', mime_type: 'text/css' } ,
          { extension: 'html', mime_type: 'text/html' } ,
          { extension: 'png', mime_type: 'image/png' } 
          ]
        },
        files: [
        {
          expand: true,
          src: ['dist/**']
        }
        ]
      }
    },
    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
      files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
      tasks: ['newer:jshint:all'],
      options: {
        livereload: true
      }
    },
    jsTest: {
    files: ['test/spec/{,*/}*.js'],
    tasks: ['newer:jshint:test', 'karma']
  },
  compass: {
  files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
  tasks: ['compass:server', 'autoprefixer']
},
gruntfile: {
  files: ['Gruntfile.js']
},
livereload: {
  options: {
    livereload: '<%= connect.options.livereload %>'
  },
  files: [
'<%= yeoman.app %>/{,*/}*.html',
'.tmp/styles/{,*/}*.css',
'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
]
}
},

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
     /* proxies: [
      {
        context: '/api',
        //host: 'mfm.jit.su',
        host: 'localhost',
        port: 3000,
        https: false,
        changeOrigin: false,
        xforward: false
      }
      ],*/
      livereload: {
        options: {
          open: true,
          base: [
          '.tmp',
          '<%= yeoman.app %>'
          ]
          /*,
          middleware: function (connect, options) {
            var middlewares = [];
            var directory = options.directory || options.base[options.base.length - 1];
            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }
            options.base.forEach(function(base) {
              // Serve static files.
              middlewares.push(connect.static(base));
            });

            // Setup the proxy
            middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
            // Make directory browse-able.
            middlewares.push(connect.directory(directory));
            return middlewares;
          }*/
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
          '.tmp',
          'test',
          '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
      'Gruntfile.js',
    '<%= yeoman.app %>/scripts/{,*/}*.js'
    ],
    test: {
      options: {
        jshintrc: 'test/.jshintrc'
      },
    src: ['test/spec/{,*/}*.js']
  }
},

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
          '.tmp',
          '<%= yeoman.dist %>/*',
          '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
        src: '{,*/}*.css',
        dest: '.tmp/styles/'
      }]
    }
  },

    // Automatically inject Bower components into the app
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },




    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
        '<%= yeoman.dist %>/static/scripts/{,*/}*.js',
      '<%= yeoman.dist %>/static/styles/{,*/}*.css',
    '<%= yeoman.dist %>/static/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    '<%= yeoman.dist %>/static/styles/fonts/*'
    ]
  }
}
},

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
    html: ['<%= yeoman.dist %>/{,*/}*.html'],
  css: ['<%= yeoman.dist %>/static/styles/{,*/}*.css'],
  options: {
    assetsDirs: ['<%= yeoman.dist %>']
  }
},

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
        src: '{,*/}*.{png,jpg,jpeg,gif}',
        dest: '<%= yeoman.dist %>/images'
      }]
    }
  },
  svgmin: {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.app %>/images',
      src: '{,*/}*.svg',
      dest: '<%= yeoman.dist %>/images'
    }]
  }
},
htmlmin: {
  dist: {
    options: {
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true,
      removeOptionalTags: true
    },
    files: [{
      expand: true,
      cwd: '<%= yeoman.dist %>',
    src: ['*.html', 'views/{,*/}*.html'],
    dest: '<%= yeoman.dist %>'
  }]
}
},

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
          '*.{ico,png,txt}',
          '.htaccess',
          '*.html',
        'views/{,*/}*.html',
        'bower_components/**/*',
      'images/{,*/}*.{webp}',
      'fonts/*'
      ]
    }, {
      expand: true,
      cwd: '.tmp/images',
      dest: '<%= yeoman.dist %>/images',
      src: ['generated/*']
    }]
  },
  styles: {
    expand: true,
    cwd: '<%= yeoman.app %>/styles',
    dest: '.tmp/styles/',
  src: '{,*/}*.css'
}
},

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
      'compass:server'
      ],
      test: [
      'compass'
      ],
      dist: [
      'compass:dist',
      'imagemin',
      'svgmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

grunt.loadNpmTasks('grunt-war');
grunt.loadNpmTasks('grunt-tomcat-deploy');

grunt.registerTask('serve', function (target) {
  if (target === 'dist') {
    return grunt.task.run(['build', 'connect:dist:keepalive']);
  }

  grunt.task.run([
    'clean:server',
    'bower-install',
    'concurrent:server',
    'autoprefixer',
    'connect:livereload',
    'watch'
    ]);
});

grunt.registerTask('server', function () {
  grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
  grunt.task.run(['serve']);
});

grunt.registerTask('test', [
  'clean:server',
  'concurrent:test',
  'autoprefixer',
  'connect:test',
  'karma'
  ]);

grunt.registerTask('build', [
  'clean:dist',
  'bower-install',
  'useminPrepare',
  'concurrent:dist',
  'autoprefixer',
  'concat',
  'ngmin',
  'copy:dist',
  'cdnify',
  'cssmin',
  'uglify',
  'rev',
  'usemin',
  'htmlmin'
  ]);

grunt.registerTask('default', [
  'newer:jshint',
  'test',
  'build'
  ]);
};