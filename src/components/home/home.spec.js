'use strict';
import HomeModule, { HomeComponent } from './index.js';
// if a mock json object is needed for tests
// import HomeMock from '../../../tests/mocks/home.mock.json';

describe('Home Component', () => {
  let ctrl;

  beforeEach(window.module(HomeModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(HomeComponent.selector, { 
      $state: {}
    });
  }));

  it('should have a title', () => {
    const expected = 'SuperNova';
    const actual = ctrl.title;
    expect(actual).toMatch(expected);
  });
});
