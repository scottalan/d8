module.exports = function(grunt) {

  //Add to the config so that we do a CM import on install
  var config = grunt.config.get('drush.install');
  config.args.push('--config-dir=config/sync');
  grunt.config.set('drush.install', config);

  grunt.registerTask('scaffold-xtra', 'Add symlink for Drupal config directory.', function() {

    // Load the necessary npm tasks.
    grunt.loadNpmTasks('grunt-contrib-symlink');

    // Symlink config.
    grunt.config(['symlink', 'config'], {
      src: '<%= config.srcPaths.drupal %>/config',
      dest: '<%= config.buildPaths.html %>/config'
    });

    // Run our task.
    grunt.task.run(['symlink:config']);

  });

  // Rename the scaffold task.
  grunt.task.renameTask('scaffold', 'scaffold-custom');
  var default_operations = ['scaffold-custom'].concat('scaffold-xtra').reverse();
  grunt.registerTask('scaffold', default_operations);
};
