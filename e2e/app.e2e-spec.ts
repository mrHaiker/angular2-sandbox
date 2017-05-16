import { ResipeBookPage } from './app.po';

describe('recipes-book App', function() {
  let page: ResipeBookPage;

  beforeEach(() => {
    page = new ResipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
