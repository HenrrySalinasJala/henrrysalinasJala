import { t as actions, t } from 'testcafe'
import faker from 'faker'
import sample from 'lodash/sample'
import GetStartedPage from '../pages/get_started_page'
import SelfRegistrationModal from '../pages/self_registration_modal'

export default class HomePageActions {
  constructor() {
    this.getStartedPage = new GetStartedPage()
    this.selfRegistrationModal = new SelfRegistrationModal()
  }

  async navigateToGetStartedPage() {
    await actions.hover(this.getStartedPage.getStartedLink)
    await actions.click(this.getStartedPage.getStartedLink)
  }

  async joinTravelerNow(companyEmail) {
    await actions.click(this.getStartedPage.joinNowButton)
    await this.verifyJoinFormIsDisplayed()
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
    const randomCountry = sample(['Bolivia', 'Peru', 'Paraguay'])
    const countryDropDown = this.selfRegistrationModal.getCountry()
    const countryElement = this.selfRegistrationModal.getDropDownOption(countryDropDown, randomCountry)
    await actions
      .click(countryDropDown)
      .click(countryElement)
    await actions.typeText(this.selfRegistrationModal.getState(), faker.address.state())
    await actions.typeText(this.selfRegistrationModal.getCity(), faker.address.city())
    await actions.typeText(this.selfRegistrationModal.getZip(), '0000')
  }

  async verifyJoinFormIsDisplayed() {
    await actions.expect(this.selfRegistrationModal.modal.visible).ok()
  }
}
