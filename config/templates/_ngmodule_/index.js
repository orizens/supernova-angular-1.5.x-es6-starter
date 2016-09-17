import angular from 'angular';
import { =ngmodule=Component } from './_ngmodule_.component';
import '_ngmodule_.less';

export * from './_ngmodule_.component';

export default angular.module('_ngmodule_', [

])
	.config(config)
	.component(=ngmodule=Component.selector, =ngmodule=Component)
.name;
/* @ngInject */
function config () {

}
