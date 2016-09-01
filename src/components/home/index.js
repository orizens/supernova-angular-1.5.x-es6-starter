import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { HomeComponent } from './home.component';

export * from './home.component';

export default angular.module('home', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(HomeComponent.selector, HomeComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('home', {
  //         url: '/home',
  //         template: '<other></other>'
  //     });
}
