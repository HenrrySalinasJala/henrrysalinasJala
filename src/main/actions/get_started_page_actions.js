import { t as actions, t } from 'testcafe'
import faker from 'faker'
import sample from 'lodash/sample'
import GetStartedPage from '../pages/get_started_page'
import SelfRegistrationModal from '../pages/self_registration_modal'

/**
 * @class HomePageActions
 */
export default class HomePageActions {
  /**
   * initializes a new instance of {@link HomePageActions}
   */
  constructor() {
    this.getStartedPage = new GetStartedPage()
    this.selfRegistrationModal = new SelfRegistrationModal()
  }

  /**
   * navigates to get started page.
   */
  async navigateToGetStartedPage() {
    await actions.hover(this.getStartedPage.getStartedLink)
    await actions.click(this.getStartedPage.getStartedLink)
  }

  /**
   * Enrolls a person as Traveler.
   * @param {string} companyEmail the company email
   */
  async enrollTraveler(companyEmail) {
    await actions.click(this.getStartedPage.joinNowButton)
    await this.verifyEnrollmentFormIsDisplayed()
    await actions.typeText(this.selfRegistrationModal.getFirstName(), faker.random.alphaNumeric(10))
    await actions.typeText(this.selfRegistrationModal.getLastName(), faker.random.alphaNumeric(10))
    await actions.typeText(this.selfRegistrationModal.getCompanyName(), faker.random.alphaNumeric(10))
    await actions.typeText(this.selfRegistrationModal.getCompanyEmail(), companyEmail)
    const profileDropDown = this.selfRegistrationModal.getWhoAreYouDroDown()
    const profile = sample(['Traveler'])
    const optionElement = this.selfRegistrationModal.getDropDownOption(profileDropDown, profile)
    await actions
      .click(profileDropDown)
      .click(optionElement)
    const countryCode = `+${faker.datatype.number({ min: 590, max: 599 })}`
    await actions.typeText(this.selfRegistrationModal.getCountryCode(), countryCode)
    await actions.typeText(
      this.selfRegistrationModal.getContactPhone(),
      faker.datatype.number({ min: 60000000, max: 90000000 }).toString(),
    )
    await actions.typeText(this.selfRegistrationModal.getBusinessAddress(), faker.address.streetAddress())
    await actions.typeText(this.selfRegistrationModal.getAddress2(), faker.address.secondaryAddress())
    const randomCountry = sample(['Bolivia', 'Paraguay'])
    const countryDropDown = this.selfRegistrationModal.getCountry()
    const countryElement = this.selfRegistrationModal.getDropDownOption(countryDropDown, randomCountry)
    await actions
      .click(countryDropDown)
      .click(countryElement)
    await actions.typeText(this.selfRegistrationModal.getState(), faker.address.state())
    await actions.typeText(this.selfRegistrationModal.getCity(), faker.address.city())
    await actions.typeText(this.selfRegistrationModal.getZip(), '0000')
    await actions.click(this.selfRegistrationModal.nextButton)
    await this.verifyEnrollmentFormIsNOTDisplayed()
  }

  /**
   * Verifies enrollment form is displayed.
   */
  async verifyEnrollmentFormIsDisplayed() {
    await actions.expect(this.selfRegistrationModal.modal.visible).ok()
  }

  /**
   * Verifies enrollment form is NOT displayed
   */
  async verifyEnrollmentFormIsNOTDisplayed() {
    await actions.expect(this.selfRegistrationModal.modal.visible).notOk({ timeout: 5000 })
  }

  /**
   * Verifies enrollment message for traveler.
   * @param {string} expectedMessage The expected message.
   */
  async verifySuccessfulEnrollmentAsTravelerMessage(expectedMessage) {
    const actualMessage = await this.selfRegistrationModal.registrationCompleteLabel.innerText
    await actions.expect(actualMessage).eql(expectedMessage, 'Unable to verify Traveler is joined properly')
  }
}
