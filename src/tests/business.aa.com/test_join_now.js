import faker from 'faker'
import HomePageActions from '../../main/actions/home_page_actions'
import GetStartedPageActions from '../../main/actions/get_started_page_actions'

const homePageActions = new HomePageActions()
const getStartedActions = new GetStartedPageActions()

/**
  go to > business.aa.com
  go to get started
  verify modal is displayed
  fill form in modal
  CLick next
  Verify Success modal
  Validate for email modal
  Validate for email text
 */

fixture('Getting Started')
  .page('http://business.aa.com/')

test('Verify it is possible to join company', async (t) => {
  await homePageActions.navigateToGetStartedPage()
  const companyEmail = faker.internet.email()
  await getStartedActions.joinNow(companyEmail)
})
