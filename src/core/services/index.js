import angular from 'angular';
// uncomment if you need a local storage solution
// import LocalStorageModule from 'angular-local-storage';
import SomeService from './some.service.srv.js';
import OtherService from './other.service.srv.js';

export default angular
  .module('core.services', [
    // 'LocalStorageModule'
  ])
  .factory('SomeService', SomeService)
  .service('OtherService', OtherService)
;
