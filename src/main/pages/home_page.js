import { Selector } from 'testcafe'

export default class HomePage {
  constructor() {
    this.getStartedLink = Selector('a').withText('Get Started')
  }
}
