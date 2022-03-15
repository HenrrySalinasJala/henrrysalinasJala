import { Selector } from 'testcafe'

export default class HomePage {
  constructor() {
    this.modal = Selector('.self-registration-container')
    this.nextButton = Selector('form button.enrollment')
  }

  getInputFieldFromFormByLabel(label) {
    return Selector('span').withText(label).parent('.inputbox').find('input')
  }

  getFirstName() {
    return this.getInputFieldFromFormByLabel('First name')
  }

  getLastName() {
    return this.getInputFieldFromFormByLabel('Last name')
  }

  getCompanyName() {
    return this.getInputFieldFromFormByLabel('Company name')
  }

  getCompanyEmail() {
    return this.getInputFieldFromFormByLabel('Company email')
  }

  getWhoAreYouDroDown() {
    return Selector('span').withText('Who are you').parent('.inputbox').find('select')
  }

  getCountryCode() {
    return this.getInputFieldFromFormByLabel('Country code')
  }

  getContactPhone() {
    return this.getInputFieldFromFormByLabel('Contact phone')
  }

  getBusinessAddress() {
    return this.getInputFieldFromFormByLabel('Business address')
  }

  getAddress2() {
    return this.getInputFieldFromFormByLabel('Address2')
  }

  getCountry() {
    return Selector('span').withText('Country').parent('.inputbox').find('select')
  }

  getState() {
    return this.getInputFieldFromFormByLabel('State')
  }

  getCity() {
    return this.getInputFieldFromFormByLabel('City')
  }

  getZip() {
    return this.getInputFieldFromFormByLabel('Zip')
  }

  getDropDownOption(selectElement, optionName) {
    return selectElement.find('option').withText(optionName)
  }
}
