import './home.less';
import template from './home.html';

export let HomeComponent = {
  templateUrl: template,
  selector: 'home',
  bindings: {},
  /* @ngInject */
  controller: class HomeCtrl {
    /* @ngInject */
    constructor($state) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });
      this.title = 'Welcome Home!';
    }
  }
};
