'use strict';
import _ngmodule_Module, { =ngmodule=Component } from './index.js';

describe('_ngmodule_ Component', () => {
  var ctrl;

  beforeEach(window.module(_ngmodule_Module));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(=ngmodule=Component.selector, {
      
    });
  }));

  it('should do what it is supposed to do', () => {
    const expected = '';
    const actual = '';
    expect(actual).toMatch(expected);
  });

});
