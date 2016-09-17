'use strict';
import HomeMockJson from '../../../tests/mocks/home.mock';
import CoreServicesModule from './index.js';

describe('Some Service', () => {
  let httpBackend, someService;

  beforeEach(window.module(CoreServicesModule.name));

  beforeEach(window.inject(($controller, $injector, $httpBackend) => {
    someService = $injector.get('SomeService');
    httpBackend = $httpBackend;
    httpBackend
      .whenGET(/www.googleapis.com/)
      .respond(HomeMockJson);
    // add spies here
  }));

  it('should have a search function', () => {
    expect(someService.search).toBeDefined();
  });

  it('should open a get request when search', () => {
    someService.search();
    httpBackend.flush();
    httpBackend.expectGET();
  });

  it('should search with a query', () => {
    const query = 'music albums';
    const expected = new RegExp(`q=${query}`);
    someService.search(query);
    httpBackend.flush();
    httpBackend.expectGET(expected);
  });
});
