module.exports = function(grunt){

	// grunt.initConfig({
	// 	pkg: grunt.file.readJSON('package.json'),
	// 	mochaTest: {
	// 		files: ['test/*.js'],
	// 		options: {
	// 			reporter: 'spec'
	// 		}
	// 	},
	// 	watch: {
	// 		files: ['/*.js', 'test/*.js'],
	// 		tasks: ['mochaTest']
	// 	}
	// });
  //
	// grunt.loadNpmTasks('grunt-mocha-test');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.registerTask('default', 'mochaTest');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      test: {
        configFile: './test/wdio.conf.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);

};
