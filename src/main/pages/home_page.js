import { Selector } from 'testcafe'

export default class HomePage {
  /**
   * initializes a new instance of {@link HomePage}
   */
  constructor() {
    this.getStartedLink = Selector('a').withText('Get Started')
  }
}
