import { Selector } from 'testcafe'

export default class HomePage {
  constructor() {
    this.joinNowButton = Selector('div a').withText('Join now')
  }
}
