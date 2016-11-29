import { GoogPage } from './app.po';

describe('goog App', function() {
  let page: GoogPage;

  beforeEach(() => {
    page = new GoogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
