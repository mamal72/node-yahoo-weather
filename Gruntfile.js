module.exports = function (grunt) { // eslint-disable-line
  grunt.initConfig({
    babel: {
      scripts: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.js',
          dest: 'dist/'
        }]
      }
    },
    clean: {
      files: ['dist/**/*.js']
    },
    eslint: {
      files: ['src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['clean', 'eslint', 'babel']);
};
