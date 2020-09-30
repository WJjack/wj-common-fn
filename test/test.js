'use strict';
const expect = require('chai').expect;
const fn = require('../dist/index');

describe('test function isEmpty', () => {
    it('should return false', () => {
      const result = fn.isEmpty(1);
      expect(result).to.equal(false);
    });
});