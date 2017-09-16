import { AAssignment52Page } from './app.po';

describe('a-assignment52 App', function() {
  let page: AAssignment52Page;

  beforeEach(() => {
    page = new AAssignment52Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
