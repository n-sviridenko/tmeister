import { browser, element, by } from 'protractor';

describe('Search', () => {

  beforeEach(() => {
    return browser.get('/');
  });

  it('should have a header', () => {
    expect(element(by.css('t-traffic-search h1')).getText()).toEqual('Traffic Meister');
  });

});
