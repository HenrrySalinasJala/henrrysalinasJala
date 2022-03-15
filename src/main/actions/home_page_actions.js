import { t as actions } from 'testcafe'
import HomePage from '../pages/home_page'

export default class HomePageActions {
  constructor() {
    this.homePage = new HomePage()
  }

  async navigateToGetStartedPage() {
    await actions.hover(this.homePage.getStartedLink)
    await actions.click(this.homePage.getStartedLink)
  }
}
