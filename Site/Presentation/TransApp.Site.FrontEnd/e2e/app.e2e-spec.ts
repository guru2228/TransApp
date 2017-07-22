import { TransAppPage } from './app.po';

describe('trans-app App', function() {
  let page: TransAppPage;

  beforeEach(() => {
    page = new TransAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
