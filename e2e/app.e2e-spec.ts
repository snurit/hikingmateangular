import { HikingMateAngularPage } from './app.po';

describe('hiking-mate-angular App', () => {
  let page: HikingMateAngularPage;

  beforeEach(() => {
    page = new HikingMateAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
