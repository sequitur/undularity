import { a, span, img, element } from '../lib/elements.js';
import { expect } from 'chai';

describe('element', function () {
  it('creates an element', function () {
    expect(
      element('p').toString()
    ).to.equal('<p></p>');
  });

  it('appends the once class', function () {
    expect(
      element('p').once().toString()
    ).to.equal('<p class="once"></p>');
  });
});

describe('a', function () {
  it('creates a link', function () {
    expect(
      a('foo').ref('http://test.io/').toString()
    ).to.equal('<a href="http://test.io/">foo</a>');
  });
});