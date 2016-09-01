'use strict';
import HomeModule, { HomeComponent } from './index.js';
// if a mock json object is needed for tests
// import HomeMock from '../../../tests/mocks/home.mock.json';

describe('Home Component', () => {
  let scope, ctrl;

  beforeEach(window.module(HomeModule));

  beforeEach(window.inject(($injector, $controller) => {
    scope = $injector.get('$rootScope').$new();
    // TODO - should convert to $componentController
    ctrl = $controller(HomeComponent.controller, {
      $scope: scope
    });
    scope.$digest();
  }));

  it('should have a title', () => {
    const expected = 'Welcome Home!';
    const actual = ctrl.title;
    expect(actual).toMatch(expected);
  });
});
