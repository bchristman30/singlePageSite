import { Christman.IoPage } from './app.po';

describe('christman.io App', () => {
  let page: Christman.IoPage;

  beforeEach(() => {
    page = new Christman.IoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
