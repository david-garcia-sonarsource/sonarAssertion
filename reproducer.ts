import { expect } from 'chai';
import { expectFalseCustom } from './myHelpers';

describe('SONAR assertion', function() {
  // function expectFalseCustom(value) {
  //   expect(value).to.be.false;
  // }
  it('SONAR QUBE ASSERTION CHECK', function() {
    // when below expectFalseCustom method is in this file with test (uncomment above) then the sonar is no raise a problem
    // when below expectFalseCustom method is imported from other file then the sonar raise problem,
    expectFalseCustom(false);
  });

  it('Standard test', function() {
    expect(false).to.be.false
  });
});
