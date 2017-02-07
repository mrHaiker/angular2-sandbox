import { PhoneMarketPage } from './app.po';

describe('phone-market App', function() {
  let page: PhoneMarketPage;

  beforeEach(() => {
    page = new PhoneMarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
