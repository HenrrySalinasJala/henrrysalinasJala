import faker from 'faker'
import HomePageActions from '../../main/actions/home.actions'
import GetStartedPageActions from '../../main/actions/get_started.actions'

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

fixture('Getting Started').page('http://business.aa.com/')

test.skip('Verify it is possible to join as traveler', async (t) => {
  await homePageActions.navigateToGetStartedPage()
  const companyEmail = faker.internet.email()
  await getStartedActions.enrollTraveler(companyEmail)
  const expectedCreateLoginMessage = 'Please check your email to create your login.'
  await getStartedActions.verifySuccessfulEnrollmentAsTravelerMessage(expectedCreateLoginMessage)
  // TODO: needs to verify email
})

test('Dummy test should fail', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  await t.expect(false).ok('This test should fail')
})

test('Dummy test should pass', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  await t.expect(true).ok('This test should pass')
})

test.skip('Dummy test should skip', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  await t.expect(false).ok('This test should skip')
})

