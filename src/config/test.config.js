import angular from 'angular';

angular.module('myApp')
    .config(config);

/* @ngInject */
function config ($compileProvider) {
	$compileProvider.debugInfoEnabled(true);
}
