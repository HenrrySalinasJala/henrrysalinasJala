import { Selector } from 'testcafe'

/**
 * @class GetStartedPage
 */
export default class GetStartedPage {
  /**
   * initializes a new instance of {@link GetStartedPage}
   */
  constructor() {
    this.joinNowButton = Selector('div a').withText('Join now')
  }
}
