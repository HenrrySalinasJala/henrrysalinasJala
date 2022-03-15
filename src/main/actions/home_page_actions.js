import { t as actions } from 'testcafe'
import HomePage from '../pages/home_page'

/**
 * @class HomePageActions
 */
export default class HomePageActions {
  /**
   * initializes a new instance of {@link HomePageActions}
   */
  constructor() {
    this.homePage = new HomePage()
  }

  async navigateToGetStartedPage() {
    await actions.hover(this.homePage.getStartedLink)
    await actions.click(this.homePage.getStartedLink)
  }
}
